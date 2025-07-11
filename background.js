// Runs when the extension is installed or enabled
chrome.runtime.onInstalled.addListener(function () {
  console.log("Extension Initialized!");

  // adds to chrome context menu (appears when you right click in the chrome window)
  chrome.contextMenus.create({
    id: "sampleButton",
    title: "Testing Button",
    // this defines when the item appears in the context menu
    // this states "selection", so it would show up when any selection of text is selected  
    contexts: ["selection"],
    // this specifies which type of links will cause the option to show up, specifically mailto: links
    // targetUrlPatterns: ["mailto:*"],
  });
});


// Runs when the button is clicked
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "sampleButton") {
    console.log("Sending Message to Content Script");
    chrome.tabs.sendMessage(tab.id, {
      type: "sampleMessage",
      selectionText: info.selectionText,
    }).catch((error) => {
      console.error("Failed to send message:", error);
      console.log("Content script may not be loaded on this page");
    });
  }
});