chrome.browserAction.onClicked.addListener((function(e){chrome.tabs.executeScript(e.ib,{file:"inject.js"})}));