document.addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'IMG' && event.ctrlKey) { // Check if the image is being hovered over and Ctrl key is pressed
        let imgElement = event.target;
        let hoverTimer; // Timer for delaying the fetch call

        const imageUrl = imgElement.getAttribute('src'); // Get image URL

        console.log('Image URL:', imageUrl); 

        hoverTimer = setTimeout(() => { // Set a timeout to delay the fetch call
            // Define the data object for the POST request
            const data = {
                method: 'POST',
                headers: {
                    //'Content-Type': 'application/json',
                    'imgurl': imageUrl
                }
            };

            // Make the fetch request to your Flask server
            fetch('http://127.0.0.1:5000/analyze', data)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); // Assuming the server returns JSON
                })
                .then(jsonResponse => {
                    // Create a new div element to display results
                    const resultDiv = document.createElement('div');

                    const resultText = document.createElement('span');
                    resultText.textContent = jsonResponse.result;
                    resultText.style.cssText = 'font-weight: bold;';

                    // Setting background color based on the result and confidence
                    let bgColor = 'rgba(255, 0, 0, 0.8)'; // Default to red for 'fake'
                    if (jsonResponse.result === 'real') {
                        const greenIntensity = Math.round(255 * (jsonResponse.confidence)); // Scale the green based on confidence
                        bgColor = `rgba(0, ${greenIntensity}, 0, 0.8)`;
                    }
                    resultDiv.style.cssText = 
                    `position: absolute; color: white; background-color: ${bgColor}; padding: 10px; border-radius: 10px; z-index: 1000; pointer-events: none; display: flex; justify-content: space-between; width: 100%; font-family: Arial, sans-serif; font-size: 16px;`;

                    resultDiv.appendChild(resultText);

                    const confidenceText = document.createElement('span');
                    confidenceText.textContent = (jsonResponse.confidence * 100).toFixed(2) + '%';
                    confidenceText.style.cssText = 'margin-left: auto; opacity: 0.7;';
                    resultDiv.appendChild(confidenceText);

                    document.body.appendChild(resultDiv);

                    // Position the resultDiv below the image
                    const rect = imgElement.getBoundingClientRect();
                    resultDiv.style.top = `${rect.bottom + window.scrollY + 5}px`;
                    resultDiv.style.left = `${rect.left + window.scrollX}px`;
                    resultDiv.style.width = `${rect.width - 20}px`;

                    // Remove the resultDiv when the mouse moves away from the image
                    imgElement.addEventListener('mouseout', function() {
                        resultDiv.remove();
                    }, { once: true });
                })
                .catch(error => {
                    console.error('There was a problem with your fetch operation:', error);
                });
        }, 100); // Delay fetch call by 100 ms or other suitable delay based on expected server response time

        imgElement.addEventListener('mouseout', function() {
            clearTimeout(hoverTimer); // Clear the timer if the mouse leaves the image before the set time
        }, { once: true });
    }
});

// Listen to the 'keyup' and 'keydown' events to handle the Ctrl key state
let ctrlPressed = false;
document.addEventListener('keydown', function(event) {
    if (event.key === "Control") {
        ctrlPressed = true;
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === "Control") {
        ctrlPressed = false;
    }
});
