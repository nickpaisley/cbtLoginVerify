chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {hostContains: 'app.crossbrowsertesting.com'},
    })],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});