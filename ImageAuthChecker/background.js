chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "checkImage") {
        fetch('https://your-api-url.com/predict', {
            method: 'POST',
            body: JSON.stringify({imageUrl: request.imageUrl}),
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => {
            chrome.tabs.sendMessage(sender.tab.id, {action: "updateStatus", status: data.prediction});
        })
        .catch(error => console.error('Error:', error));
    }
});
