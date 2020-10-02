// This monitors the current URL and shift the plugin icon from Grey to Colored to 
// indicate it is active. Still buggy as it enables the icon regardless of URL. 
// Need to work on this so it's only colored when on a app.cbt URL.
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {hostContains: 'app.crossbrowsertesting.com'},
    })],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});


// begin creating popup controls.
// let's start by putting the alternate background color in storage
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#fcdb03'}, function() {
    console.log("The background color will be green.");
  });
});