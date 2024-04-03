// background.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "newTab") {
      // Check if the referring tab matches the website you want to target
      if (message.openerTabId && sender.tab && sender.tab.url.includes("kissanime.com.ru")) {
        // Close the newly opened tab
        chrome.tabs.remove(sender.tab.id);
      }
    }
  });
  
  