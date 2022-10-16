import 'sass/style.sass';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import LoginWindow from './Components/LoginWindow';
import Notifications from './Utils/Notifications';

import { getDefaultState, PrimaryReducer } from './Reducers/PrimaryReducer';
import { addAdditionalSettings } from './Reducers/SettingsReducer';

import { Event, Signals } from 'Logic/Signals';

import { WallpaperLoader } from 'Components/LoginWindow/Sidebar/WallpaperSwitcher';
import ExperimentalStarsWrapper from 'Components/LoginWindow/ExperimentalStarsWrapper';


const getStore = () => {
  let initialState = getDefaultState();
  initialState = addAdditionalSettings(initialState);

  let store;

  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    store = createStore(
      PrimaryReducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  } else {
    store = createStore(PrimaryReducer, initialState);
  }
  
  return store;
};


const primaryMain = () => {
  const store = getStore(); 

  ReactDOM.createRoot(document.getElementById('login-window-mount')).render(
    <Provider store={ store }>
      <LoginWindow />
    </Provider>
  );
};


const secondaryMain = () => {
  Signals.prepare();

  const wallpaperLoader = new WallpaperLoader();
  wallpaperLoader.init();

  // Hide preloader when the preloader of the primary window is hidden
  Signals.listen(Event.PRIMARY_LOADED, () =>
    document.getElementById('preloader').className += 'loaded');

  // Update wallpaper when the wallpaper in the primary window is changed
  Signals.listen(Event.UPDATE_WALLPAPER, (newWallpaper, preloadedWallpaper) =>
    wallpaperLoader.setWallpaper(newWallpaper, preloadedWallpaper));
 
  const store = getStore();
  ReactDOM.createRoot(document.getElementById('experimental-mount')).render(
    <Provider store={ store }>
      <ExperimentalStarsWrapper />
    </Provider>
  );
};


export default function Main() {
  if (window.greeter_comm.window_metadata.is_primary) {
    window.notifications = new Notifications();
    primaryMain();
  } else {
    secondaryMain();
  }
}

window.onload = (e) => {
  const init = () => {
    Main();
    //document.getElementById('password-field').focus();
  };

  // Horribly convoluted for necessity because reasons
  if (window.__debug === false) {
    if (window.lightdm === undefined) {
      document.addEventListener('GreeterReady', () => {
        init();
      });
    } else {
      init();
    }
  } else {
    init();
  }
};
