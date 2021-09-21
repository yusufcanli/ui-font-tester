let toggle = false;

chrome.browserAction.onClicked.addListener(function (tab) {
    toggle = !toggle;
    if (toggle) {
        chrome.tabs.executeScript(null, {
            file: "popup.js"
        });
        chrome.browserAction.setIcon({
            path: 'focus.png'
        });
    } else {
        chrome.tabs.executeScript(null, {
            file: "reload.js"
        });
        chrome.browserAction.setIcon({
            path: 'icon.png'
        });
    }

});