// This listener will wait for messages from content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Define the API endpoint, adjust if your server URL is different
    const serverEndpoint = 'http://localhost:5000/analyze';

    // Fetch the image analysis result from your Python server
    fetch(serverEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl: request.imgSrc }) // Send the image URL
    })
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
        // Send the result back to the content script
        chrome.tabs.sendMessage(sender.tab.id, { result: data.result });
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle any errors
    });

    // Return true to indicate that you want to send a response asynchronously
    return true;
});
