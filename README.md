# Aether
###### ( lightdm-webkit-theme-aether )
Inspired by a lifelong love with space.

A Sleek, straightforward Archlinux themed login screen written on lightdm and [web-greeter](https://github.com/JezerM/web-greeter).

## **[➡ ➡  Try the live demo of Aether here ⬅ ⬅](https://clausmarian.github.io/Aether/)**

![](../screenshots/screenshot.png)

## Table of Contents

- [Aether](#aether)
  - [Features](#features)
  - [Requirements](#requirements)
  - [Installation](#installation)
    - [Accessing the Settings Dialogue](#accessing-the-settings-dialogue)
    - [Setting an Avatar Image](#setting-an-avatar-image)
    - [Using Your Own Wallpapers](#using-your-own-wallpapers)
    - [Modifying Date and Time Format](#modifying-date-and-time-format)
  - [Troubleshooting](#troubleshooting)
    - [My login screen hasn't changed!](#my-login-screen-hasnt-changed)
    - [My screen is black!](#my-screen-is-black)
    - [My system hangs at the boot screen!](#my-system-hangs-at-the-boot-screen)
    - [The lock screen isn't using my lightdm theme!](#the-lock-screen-isnt-using-my-lightdm-theme)
  - [Development](#development)
    - [Running Tests](#running-tests)
    - [Building Project](#building-project)
    - [Monitoring Changes](#monitoring-changes)
    - [Todo](#todo)
    - [Credit](#credits)

## Features

**Stylish Default Themes**

![](../screenshots/theme-showcase.gif)

**Advanced Customization**

![](../screenshots/settings-customization.gif)

**Multi User Support**

![](../screenshots/user-switcher.gif)

**Built-in Wallpaper Customization**

![](../screenshots/wallpaper-switcher.gif)

## Requirements
- [web-greeter (aur/web-greeter)](https://github.com/JezerM/web-greeter)

## Installation

**Manual Installation**

This assumes that you already have lightdm and web-greeter installed (but not configured).

```
# Download the latest stable release from the releases page: https://github.com/clausmarian/Aether/releases/latest
sudo cp -r Aether /usr/share/web-greeter/themes/lightdm-webkit-theme-aether

# Set default web-greeter theme to lightdm-webkit-theme-aether
sudo sed -i 's/^\s*theme\s*:\s*\(.*\)/    theme: lightdm-webkit-theme-aether #\1/g' /etc/lightdm/web-greeter.yml

# Set default lightdm greeter to web-greeter
sudo sed -i 's/^\(#?greeter\)-session\s*=\s*\(.*\)/greeter-session = web-greeter #\1/ #\2g' /etc/lightdm/lightdm.conf
```


### **Accessing the Settings Dialogue**

Hover over the bottom left of your screen to find the settings button. Once active, theme settings will remain open in a draggable dialogue window until dismissed.


### **Setting an Avatar Image**

![](./assets/img/avatar-default.png)

Once LightDM, LightDM Webkit Greeter, and Aether are installed you will need to set an avatar image for your users. Size is irrelevant, and avatars will be displayed as a 125x125 circle (Yes, square images too). Users that don't have an avatar set will default to the [astronaut](./assets/img/avatar-default.png).

To accomplish this, you can do either of the following:
- Create an image in your home directory named `.face`.
- Append `Icon=/path/to/your/avatar.png` to the bottom of the file at `/var/lib/AccountsService/users/<youraccountname>`

### **Using Your Own Wallpapers**

#### Method One:
Add and delete wallpapers within the `assets/img/wallpapers/` directory as you see fit. By default, you will find this folder at the absolute path: `/usr/share/web-greeter/themes/lightdm-webkit-theme-aether/assets/img/wallpapers/`.

#### Method Two:
Edit the `background_images_dir` value under `branding` within your web-greeter config file located at `/etc/lightdm/web-greeter.conf`.
*Note: This ignores the default value of /usr/share/backgrounds, as this is always set and would prevent the default wallpapers from working. To use wallpapers from within that directory, create a subdirectory at /usr/share/backgrounds/aether (or any other folder name) and change your config value accordingly.*

### **Modifying Date and Time Format**

The formatting symbols are not necessarily what you would expect them to be! See the following:

https://github.com/samsonjs/strftime#supported-specifiers

## Troubleshooting

### My login screen hasn't changed!

Make sure you have lightdm enabled via systemctl with `systemctl is-enabled lightdm.service`. If it isn't, follow up with:
```
sudo systemctl enable lightdm.service
```

### My screen is black!

Verify that your libgl / glx drivers are properly installed. Find any potential issues with your X config by switching to another TTY with <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F2</kbd> and trying:
```
sudo cat /var/log/Xorg.0.log | grep -i "glx"
```

Are you able to run `glxinfo` without errors?

### My system hangs at the boot screen!

Switch to another TTY with <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F2</kbd> and check your lightdm logs by running:
```
sudo tail /var/log/lightdm/seat0-greeter.log
```

If you see something similar to:
```
*** (lightdm:709): CRITICAL **: session_get_login1_session_id: assertion 'session != NULL' failed
```

Then you should try re-installing and / or reconfiguring your graphics drivers, especially if this occurred after a kernel update.

### The lock screen isn't using my lightdm theme!

If you are using cinnamon, gnome, or any gnome derivative; Good Luck. The solution involves [light-locker (community/light-locker)](https://github.com/the-cavalry/light-locker), but conflicts with the existing lock / screensaver applications. There is no known way to resolve this.

If you are not using a gnome derivative, see below.

Solution:

```
echo "light-locker &" >> ~/.xprofile
```

## Development

Make sure you have [Node](https://nodejs.org/en/) installed.

- `npm install` *(While in project directory)*

### Running Tests
```
npm run test
```

### Building Project
```
npm run build
```

### Monitoring Changes
```
npm run watch
```

##### Credit
- *Bear by Yu luck from the Noun Project*
- *Power by Nikita Kozin from the Noun Project*
- *Arrow by Landan Lloyd from the Noun Project*
- Implements [React-Color](https://github.com/casesandberg/react-color) by [bcherny](https://github.com/casesandberg)
