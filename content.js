// content.js
console.log("Content script loaded");

// Listen for new tab creation
chrome.runtime.sendMessage({
    action: "newTab", 
    url: window.location.href, 
    openerTabId: performance.getEntriesByType("navigation")[0].type === "navigate" ? null : performance.getEntriesByType("navigation")[0].sourceId
});
