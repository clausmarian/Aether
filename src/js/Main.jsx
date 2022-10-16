import 'sass/style.sass';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import LoginWindow from './Components/LoginWindow';
import Notifications from './Utils/Notifications';

import { getDefaultState, PrimaryReducer } from './Reducers/PrimaryReducer';
import { addAdditionalSettings } from './Reducers/SettingsReducer';

import { WallpaperLoader } from 'Components/LoginWindow/Sidebar/WallpaperSwitcher';


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
  const wallpaperLoader = new WallpaperLoader();
  wallpaperLoader.init();

  addEventListener('GreeterBroadcastEvent', (evt) => {  
    if (!evt.window.is_primary)
      return;
 
    const data = evt.data;
    if (data.type === 'primary_loaded') {
      document.getElementById('preloader').className += 'loaded';
    } else if (data.type === 'update_wallpaper') {
      // Update wallpaper when the wallpaper in the primary window is changed
      wallpaperLoader.setWallpaper(data.newWallpaper, data.preloadedWallpaper);
    }
  });
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
