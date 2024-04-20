document.addEventListener('DOMContentLoaded', function() {
    var statusElement = document.getElementById('status');
    // Listen for messages from the content script
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === "updateStatus") {
            statusElement.textContent = request.status;
        }
    });
});
