export class Event {
  static idToEvent = {};
  static PRIMARY_LOADED = new Event(1, (data, listener) => listener());
  static UPDATE_WALLPAPER = new Event(2, (data, listener) => listener(data.newWallpaper, data.preloadedWallpaper));
  static UPDATE_STARS_ENABLED = new Event(3, (data, listener) => listener(data.enabled));

  constructor(id, parseData) {
    if (Event.idToEvent[id] !== undefined) {
      throw new Error(`The Event id ${ id } is already in use!`);
    }
    
    this.id = id;
    this.parseData = parseData;
    Event.idToEvent[id] = this;
  }
}

export class Signals {
  static eventToListeners = {};

  static prepare(onlyPrimary=true) {
    addEventListener('GreeterBroadcastEvent', evt => {
      if (onlyPrimary && !evt.window.is_primary)
        return;

      // Get event by id
      const e = Event.idToEvent[evt.data.type];
      if (e === undefined)
        return;

      // Call listeners by event id
      const listeners = Signals.eventToListeners[e.id];
      if (listeners !== undefined) {
        for (const listener of listeners) {
          e.parseData(evt.data.payload, listener);
        }
      }
    });
  }

  static errorOnInvalidEvent(e) {
    if (Event.idToEvent[e.id] === undefined)
      throw new Error(`There is no such event ${ e }`);
  }

  static listen(e, listener) {
    Signals.errorOnInvalidEvent(e);

    let listeners = Signals.eventToListeners[e.id];
    if (listeners === undefined) {
      listeners = [];
    }
    listeners.push(listener);
    Signals.eventToListeners[e.id] = listeners;
  }

  static broadcast(e, data=undefined) {
    Signals.errorOnInvalidEvent(e);

    window.greeter_comm.broadcast({
      'type': e.id,
      'payload': data
    });
  }
}


