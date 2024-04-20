// This listener will wait for messages from content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Use your Heroku app's endpoint for image analysis
    const serverEndpoint = 'https://guarded-wildwood-07790-f63d3116a68b.herokuapp.com/analyze';

    // Fetch the image analysis result from your server
    fetch(serverEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl: request.imageUrl }) // Send the image URL
    })
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
        // Send the result back to the content script
        chrome.tabs.sendMessage(sender.tab.id, { result: data.result });
    })
    .catch(error => {
        console.error('Error:', error);
        // Optionally send an error back to the content script
        chrome.tabs.sendMessage(sender.tab.id, { error: 'Failed to analyze image.' });
    });

    // Return true to indicate that you want to send a response asynchronously
    return true;
});
