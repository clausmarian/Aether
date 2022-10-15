// FileOperations -> Required by Components/WallpaperSwitcher
// --------------------------------------
// LightDM related file / config fetching.

export function getRelativePath(path="") {
  return  `/usr/share/web-greeter/themes/lightdm-webkit-theme-aether/${ path }`;
}


export function getWallpaperDirectory() {
  // Return the test folder when debugging.
  if (window.__debug === true) {
    return "src/test/wallpapers/";
  }

  let wallpapersDirectory = window.greeter_config.branding.background_images_dir;

  // Do NOT allow the default wallpaper directory to set, as this will prevent the default provided backgrounds from
  // being used 100% of the time in a stock install.
  if (wallpapersDirectory == "/usr/share/backgrounds") {
    wallpapersDirectory = getRelativePath("assets/img/wallpapers/");
  }

  return wallpapersDirectory;
}


export const getFilename = path => {
  if (path == undefined) {
    return '';
  }

  return path.split('/').pop();
};

export async function getWallpapers(directory) {
  // If we're in test mode, we stick to a static rotation of three default wallpapers.
  // In production, it is possible that a user will change what wallpapers are available.
  if (window.__debug === true) {
    return ['boko.jpg', 'mountains-2.png', 'space-1.jpg'];
  }

  let wallpapers = [];

  await new Promise(resolve => {
    window.theme_utils.dirlist(directory, true, images => {
      wallpapers = images;
      resolve();
    });
  });

  return wallpapers.map(getFilename);
}


export async function getLogos() {
  // If we're in test mode, just return the default three.
  if (window.__debug === true) {
    return [
      ["src/test/logos/archlinux.png", "archlinux.png"],
      ["src/test/logos/antergos.png", "antergos.png"],
      ["src/test/logos/ubuntu.png", "ubuntu.png"],
      ["src/test/logos/debian.png", "debian.png"],
      ["src/test/logos/generic.png", "generic.png"],
      ["src/test/logos/tux.png", "tux.png"],
      ["src/test/logos/tux-silhouette.png", "tux-silhouette.png"]
    ];
  }

  // Return a tuple of the path and filename for usage in the Settings dialogue.
  let userLogo = window.greeter_config.branding.logo;
  let themeLogos = [];
  
  await new Promise(resolve => {
    window.theme_utils.dirlist(getRelativePath("assets/img/logos"), true, images => {
      themeLogos = images;
      resolve();
    });
  });
  themeLogos.push(userLogo);
  
  return themeLogos.map((e) => [e, getFilename(e)]);
}


export function getEnvironments() {
  return window.lightdm.sessions.map((session) => {
    return {
      'name': session.name,
      'value': session.key
    };
  });
}
