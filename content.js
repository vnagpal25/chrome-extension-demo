function sampleFunction(selectionText) {
  console.log(selectionText);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "sampleMessage") {
    console.log("Hello from Content.js");
    const emailDetails = extractEmailDetails(request.selectionText);
    copyToClipboard(emailDetails);
  }
});
