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


const WallpaperSwitcher = props => {
  const wallpaperDirectory = FileOperations.getWallpaperDirectory();

  const [cyclerState, setCyclerState] = useState({
    "defaultStarsEnabled": undefined,
    "cyclerBackground": undefined,
    "cyclerForeground": undefined,
    "cyclerPreloader": undefined
  });
  
  const [state, setState] = useState({
    "directory": wallpaperDirectory,
    "wallpapers": FileOperations.getWallpapers(wallpaperDirectory),
    "selectedWallpaper": undefined,
    "savedWallpaper": undefined,
    "switcher": {
      "active": false,
      "currentlyFading": false,
      "index": 0
    },
  });

  useEffect(() => {
    // Set background wallpaper
    let directory = state.directory;
    let image = Settings.requestSetting('wallpaper', 'space-1.jpg');
    
    const cyclerBackground = document.querySelectorAll('.wallpaper-background')[0];
    const cyclerForeground = document.querySelectorAll('.wallpaper-foreground')[0];
    const cyclerPreloader = document.querySelectorAll('.wallpaper-preload')[0];
  
    cyclerForeground.style.background = `url('${ directory }${ image }')`;
    cyclerForeground.style.backgroundPosition = 'center';
    cyclerForeground.style.backgroundSize = "cover";
    document.body.style.background = `url('${ directory }${ image }')`;
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = "cover";
    
    setCyclerState(old => {
      return {
        ...old,
        "cyclerBackground": cyclerBackground,
        "cyclerForeground": cyclerForeground,
        "cyclerPreloader": cyclerPreloader
      };
    });
    
    setState(old => {
      return {
        ...old,
        "savedWallpaper": image
      };
    });
  }, []);

  const acceptWallpaper = () => {
    let selectedWallpaper = state.selectedWallpaper;
    let switcher = state.switcher;

    // Due diligence.
    Settings.saveSetting('wallpaper', selectedWallpaper);
    window.notifications.generate("This wallpaper has been saved as your default background.", 'success');

    // Reset switcher state
    switcher.active = false;
    switcher.index = 0;

    setState(old => {
      return {
        ...old,
        "selectedWallpaper": selectedWallpaper,
        "savedWallpaper": selectedWallpaper,
        "switcher": switcher
      };
    });

    restoreStarsSetting();
  };

  const cycleWallpaper = () => {
    // Prevent animation transitions stacking and causing issues.
    if (state.switcher.currentlyFading === true) {
      return false;
    }

    let wallpapers = state.wallpapers;
    let switcher = state.switcher;

    const nextIndex = (index) => (index + wallpapers.length + 1) % wallpapers.length;

    let newIndex = nextIndex(switcher.index);
    let newWallpaper = wallpapers[newIndex];

    let preloadedIndex = nextIndex(newIndex);
    let preloadedWallpaper = wallpapers[preloadedIndex];

    setWallpaper(newWallpaper, preloadedWallpaper);

    switcher.index = newIndex;

    setState(old => {
      return {
        ...old,
        "switcher": switcher
      };
    });
  };

  const handleSwitcherActivation = () => {
    if (state.switcher.active === false) {
      setCyclerState(old => {
        return {
          ...old,
          "defaultStarsEnabled": props.starsEnabled
        };
      });

      props.dispatch({
        'type': 'SETTINGS_SET_VALUE',
        'name': 'experimental_stars_enabled',
        'value': false
      });
    }

    setTimeout(() => {
      let switcher = state.switcher;
      switcher.active = true;
      cycleWallpaper();

      setState(old => {
        return {
          ...old,
          "switcher": switcher
        };
      });
    }, 100);
  };

  const rejectWallpaper = () => {
    let savedWallpaper = state.savedWallpaper;
    let switcher = state.switcher;

    // Reset switcher state
    switcher.active = false;
    switcher.index = 0;

    setState(old => {
      return {
        ...old,
        "switcher": switcher
      };
    });

    setWallpaper(savedWallpaper);
    restoreStarsSetting();

    window.notifications.generate("Wallpaper reset to default, no changes saved.");
  };

  const setWallpaper = (newWallpaper, preloadedWallpaper=false) => {
    let switcher = state.switcher;

    // Fadeout foreground wallpaper to new wallpaper
    let directory = state.directory;
    cyclerState.cyclerBackground.style.background = `url('${ directory }${ newWallpaper }')`;
    cyclerState.cyclerBackground.style.backgroundPosition = 'center';
    cyclerState.cyclerBackground.style.backgroundSize = 'cover';
    cyclerState.cyclerForeground.className += " fadeout";

    switcher.currentlyFading = true;

    if (preloadedWallpaper !== false) {
      // Preload the next image
      cyclerState.cyclerPreloader.style.background = `url('${ directory }${ preloadedWallpaper }')`;
    }

    setTimeout(() => {
      // Cycle new wallpaper back to the front, make it visible again.
      cyclerState.cyclerForeground.style.background = `url('${ directory }${ newWallpaper }')`;
      cyclerState.cyclerForeground.style.backgroundPosition = 'center';
      cyclerState.cyclerForeground.style.backgroundSize = 'cover';
      cyclerState.cyclerForeground.className = cyclerState.cyclerForeground.className.replace(" fadeout", "");
      document.body.style.background = `url('${ directory }${ newWallpaper }')`;
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundSize = 'cover';

      let switcher = state.switcher;
      switcher.currentlyFading = false;

      setState(old => {
        return {
          ...old,
          "selectedWallpaper": newWallpaper,
          "switcher": switcher
        };
      });
    }, FADEOUT_TIME);
  };

  const restoreStarsSetting = () => {
    props.dispatch({
      'type': 'SETTINGS_SET_VALUE',
      'name': 'experimental_stars_enabled',
      'value': cyclerState.defaultStarsEnabled
    });
  };

  const generateOptions = () => {
    let classes = ['options'];

    if (state.switcher.active === true) {
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
