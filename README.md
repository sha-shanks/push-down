# Google Homepage Popup Blocker

A lightweight Chrome extension that blocks the "Sign in to Google" or "Use Chrome for a better experience" pop-up on the [Google homepage](https://www.google.com/) and ensures your typing always stays focused in the search box.

---

## Example Pop-up

Below is an example of the pop-up this extension blocks:

![the pop-up in question](https://github.com/sha-shanks/push-down/blob/master/Capture.PNG?raw=true)

---

## Installation

1. **Clone or Download this Repository**
2. **Go to** `chrome://extensions/` **in your Chrome browser**
3. **Enable Developer Mode** (toggle in the top right)
4. **Click "Load unpacked"** and select the folder containing this extension

---

## How It Works

- The extension injects a script on the Google homepage that:
    - Detects and hides the pop-up element (by its class name).
    - Keeps the search box (`input[name="q"]`) focused at all times.

---

*This extension is for personal use and demonstration purposes only. Google and Chrome are trademarks of Google LLC.*

<div style="text-align: center">⁂</div>