chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    const serverEndpoint = 'http://127.0.0.1:5000/analyze';
    fetch(serverEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image_url: request.imageUrl })
    })
    .then(response => response.json())
    .then(data => {
        sendResponse({ result: data.result });
    })
    .catch(error => {
        console.error('Error:', error);
        sendResponse({ result: 'Error analyzing image' });
    });
    return true;
});