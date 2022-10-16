// WallpaperSwitcher -> Required by Components/CommandPanel
// --------------------------------------
// Serves to handle wallpaper switching through DOM manipulation.

import cxs from 'cxs';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import * as FileOperations from 'Logic/FileOperations';
import * as Settings from 'Logic/Settings';

const FADEOUT_TIME = 600;


// Loads wallpapers by fading them in
export class WallpaperLoader {
  callWallpaperChangeListeners(newWallpaper, preloadedWallpaper) {
    for (const listener in this.wallpaperChangeListeners) {
      if (typeof(listener) === "function") {
        listener(newWallpaper, preloadedWallpaper);
      }
    }
  }

  addWallpaperChangeListener(listener) {
    this.wallpaperChangeListeners.push(listener);
  }

  constructor(restoreStarsSetting=undefined, switcher=undefined, setSwitcher=undefined, defaultSwitcher=undefined) {
    if (restoreStarsSetting == undefined) {
      this.restoreStarsSetting = () => {};
    } else {
      this.restoreStarsSetting = restoreStarsSetting;
    }

    this.wallpaperChangeListeners = [];
 
    this.defaultStarsEnabled = undefined;
    this.cyclerBackground = undefined;
    this.cyclerForeground = undefined;
    this.cyclerPreloader = undefined;
  
    this.wallpaperDirectory = FileOperations.getWallpaperDirectory();
    this.selectedWallpaper = undefined;

    // Use react state hook to trigger re render when the switcher is updated (needed for the save/reject option buttons)
    if (switcher !== undefined && setSwitcher !== undefined) {
      this.switcher = switcher;
    } else {
      if (defaultSwitcher == undefined) {
        this.switcher = WallpaperCycler.makeSwitcher();
      } else {
        this.switcher = defaultSwitcher;
      }
    }
    
    this.setSwitcher = getVal => {
      if (typeof(getVal) === "function") {
        this.switcher = getVal(this.switcher);
      } else {
        this.switcher = getVal;
      }
      
      if (setSwitcher != undefined)
        setSwitcher(getVal);
    };
  }

  static makeSwitcher() {
    return {
      "active": false,
      "currentlyFading": false
    };
  }

  resetSwitcher() {
    this.setSwitcher(old => {
      return {
        ...old,
        "active": false,
        "index": 0
      };
    });
  }
  
  init() {
    // Set background wallpaper
    this.selectedWallpaper = Settings.requestSetting('wallpaper', 'space-1.jpg');
    
    this.cyclerBackground = document.querySelectorAll('.wallpaper-background')[0];
    this.cyclerForeground = document.querySelectorAll('.wallpaper-foreground')[0];
    this.cyclerPreloader = document.querySelectorAll('.wallpaper-preload')[0];
  
    this.cyclerForeground.style.background = `url('${ this.wallpaperDirectory }${ this.selectedWallpaper }')`;
    this.cyclerForeground.style.backgroundPosition = 'center';
    this.cyclerForeground.style.backgroundSize = "cover";
    document.body.style.background = `url('${ this.wallpaperDirectory }${ this.selectedWallpaper}')`;
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = "cover";
  }

  setWallpaper(newWallpaper, preloadedWallpaper=false) {
    this.callWallpaperChangeListeners(newWallpaper, preloadedWallpaper);
      
    // Fadeout foreground wallpaper to new wallpaper
    this.cyclerBackground.style.background = `url('${ this.wallpaperDirectory }${ newWallpaper }')`;
    this.cyclerBackground.style.backgroundPosition = 'center';
    this.cyclerBackground.style.backgroundSize = 'cover';
    this.cyclerForeground.className += " fadeout";

    this.setSwitcher(old => {
      return {
        ...old,
        "currentlyFading": true
      };
    });

    if (preloadedWallpaper !== false) {
      // Preload the next image
      this.cyclerPreloader.style.background = `url('${ this.wallpaperDirectory }${ preloadedWallpaper }')`;
    }

    setTimeout(() => {
      // Cycle new wallpaper back to the front, make it visible again.
      this.cyclerForeground.style.background = `url('${ this.wallpaperDirectory }${ newWallpaper }')`;
      this.cyclerForeground.style.backgroundPosition = 'center';
      this.cyclerForeground.style.backgroundSize = 'cover';
      this.cyclerForeground.className = this.cyclerForeground.className.replace(" fadeout", "");
      document.body.style.background = `url('${ this.wallpaperDirectory }${ newWallpaper }')`;
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundSize = 'cover';
    
      this.setSwitcher(old => {
        return {
          ...old,
          "currentlyFading": false
        };
      });

      this.selectedWallpaper = newWallpaper;
    }, FADEOUT_TIME);
  }
}


// Supports cycling wallpapers in a WallpaperLoader
export class WallpaperCycler extends WallpaperLoader {
  constructor(restoreStarsSetting=undefined, switcher=undefined, setSwitcher=undefined) {
    super(restoreStarsSetting, switcher, setSwitcher, WallpaperCycler.makeSwitcher());
    this.wallpapers = [];
    this.savedWallpaper = undefined;
  }

  init() {
    super.init();

    this.savedWallpaper = this.selectedWallpaper;

    (async () => {
      this.wallpapers = await FileOperations.getWallpapers(this.wallpaperDirectory);
      
      // Set switcher index to index of the saved wallpaper
      const savedWallpaperIndex = this.wallpapers.indexOf(this.savedWallpaper);
      if (savedWallpaperIndex !== -1) {
        this.switcher.index = savedWallpaperIndex;
      }
    })();
  }

  static makeSwitcher() {
    return {
      "active": false,
      "currentlyFading": false,
      "index": 0
    };
  }

  rejectWallpaper() {
    this.resetSwitcher(); 
    this.setWallpaper(this.savedWallpaper);
    this.restoreStarsSetting();
  }

  acceptWallpaper() { 
    // Due diligence.
    Settings.saveSetting('wallpaper', this.selectedWallpaper);
    window.notifications.generate("This wallpaper has been saved as your default background.", 'success');

    this.resetSwitcher();
    this.savedWallpaper = this.selectedWallpaper;
    
    this.restoreStarsSetting();
  }

  cycleWallpaper() {
    this.setSwitcher(old => {
      return {
        ...old,
        "active": true
      };
    });
    
    // Prevent animation transitions stacking and causing issues.
    if (this.switcher.currentlyFading === true) {
      return false;
    }

    const nextIndex = (index) => (index + this.wallpapers.length + 1) % this.wallpapers.length;

    let newIndex = nextIndex(this.switcher.index);
    let newWallpaper = this.wallpapers[newIndex];

    let preloadedIndex = nextIndex(newIndex);
    let preloadedWallpaper = this.wallpapers[preloadedIndex];

    this.setWallpaper(newWallpaper, preloadedWallpaper);
    
    this.switcher.index = newIndex;
    this.setSwitcher(old => {
      return {
        ...old,
        "index": newIndex
      };
    });
  }
}


const WallpaperSwitcher = props => {
  const restoreStarsSetting = () => {
    props.dispatch({
      'type': 'SETTINGS_SET_VALUE',
      'name': 'experimental_stars_enabled',
      'value': cycler.defaultStarsEnabled
    });
  };

  const [switcher, setSwitcher] = useState(WallpaperCycler.makeSwitcher());
  const [cycler, setCycler] = useState(new WallpaperCycler(restoreStarsSetting, switcher, setSwitcher));
  cycler.addWallpaperChangeListener((newWallpaper, preloadedWallpaper) => {
    // Broadcast wallpaper change to other screens
    window.greeter_comm.broadcast({
      'type': 'update_wallpaper',
      'newWallpaper': newWallpaper,
      'preloadedWallpaper': preloadedWallpaper
    });
  });

  useEffect(() => {
    cycler.init();
  }, []);

  const handleSwitcherActivation = () => {
    if (cycler.switcher.active === false) {
      cycler.defaultStarsEnabled = props.starsEnabled;  
      setCycler(cycler);

      props.dispatch({
        'type': 'SETTINGS_SET_VALUE',
        'name': 'experimental_stars_enabled',
        'value': false
      });
    }

    setTimeout(() => {
      cycler.cycleWallpaper();
    }, 100);
  };

  const rejectWallpaper = () => {
    cycler.rejectWallpaper(); 
    window.notifications.generate("Wallpaper reset to default, no changes saved.");
  };

  const acceptWallpaper = () => {
    cycler.acceptWallpaper();
  };

  const generateOptions = () => {
    let classes = ['options'];

    if (cycler.switcher.active === true) {
      classes.push('active');
    }

    return (
      <div className='options-wrapper'>
        <div className={ classes.join(' ') }>
          <div className="button-reject" onClick={ rejectWallpaper.bind(this) } >✕</div>
          <div className="button-accept" onClick={ acceptWallpaper.bind(this) } >✓</div>
        </div>
      </div>
    );
  };

  let options = generateOptions();
  let classes = [ 'distro-logo' ];

  classes.push(cxs({
    "background-image": `url(${ props.distroImage }) !important`,
  }));

  if (props.desaturate) {
    classes.push(cxs({
      "filter": `grayscale(1) brightness(${ (props.brightness * 200) / 100 }%)`
    }));
  }

  return (
    <div className="distro-wrapper">
      <div className={ classes.join(' ') } onClick={ handleSwitcherActivation.bind(this) }></div>
      { options }
    </div>
  );
};

WallpaperSwitcher.propTypes = {
  'distroImage': PropTypes.string.isRequired,
  'starsEnabled': PropTypes.bool.isRequired,
  'desaturate': PropTypes.bool.isRequired,
  'brightness': PropTypes.number.isRequired,

  'dispatch': PropTypes.func.isRequired
};

export default connect(
  (state) => {
    return {
      'distroImage': state.settings.distro,
      'starsEnabled': state.settings.experimental_stars_enabled,
      'desaturate': state.settings.style_command_logo_desaturate,
      'brightness': Number(state.settings.style_command_logo_brightness)
    };
  },
  null
)(WallpaperSwitcher);
