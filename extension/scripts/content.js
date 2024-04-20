// Listen for mouseover events on all elements
document.addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'IMG') {
        const imgSrc = event.target.getAttribute('src');
        // Log the image element to the console
        console.log(imgSrc);

        // Create a new div element to display 'Hello'
        const helloDiv = document.createElement('div');
        helloDiv.textContent = analyze();
        helloDiv.style.cssText = 'position: absolute; color: white; background-color: black; padding: 5px; border-radius: 5px; z-index: 1000; pointer-events: none;';

        // Append 'Hello' div to the body
        document.body.appendChild(helloDiv);

        // Position the helloDiv below the image
        const rect = event.target.getBoundingClientRect();
        helloDiv.style.top = `${rect.bottom + window.scrollY}px`;
        helloDiv.style.left = `${rect.left + window.scrollX}px`;

        // Remove the 'Hello' div when the mouse moves away from the image
        event.target.addEventListener('mouseout', function() {
            helloDiv.remove();
        }, { once: true });
    } else if (event.target.tagName === 'DIV' && event.target.childElementCount === 0) {
        // Traverse upwards in the DOM until an ancestor div containing an image is found
        let parentDiv = event.target.parentElement;
        while (parentDiv && (!parentDiv.querySelector('img') || parentDiv.tagName !== 'DIV')) {
            parentDiv = parentDiv.parentElement;
        }

        if (parentDiv && parentDiv.tagName === 'DIV') {
            // Get the image element within the parent div
            const imgElement = parentDiv.querySelector('img');
            const imgSrc = imgElement.getAttribute('src');
            // Log the image source to the console
            console.log(imgSrc);

            // Create a new div element to display 'Hello'
            const helloDiv = document.createElement('div');
            helloDiv.textContent = 'Hello';
            helloDiv.style.cssText = 'position: absolute; color: white; background-color: black; padding: 5px; border-radius: 5px; z-index: 1000; pointer-events: none;';

            // Append 'Hello' div to the body
            document.body.appendChild(helloDiv);

            // Position the helloDiv below the image
            const rect = imgElement.getBoundingClientRect();
            helloDiv.style.top = `${rect.bottom + window.scrollY}px`;
            helloDiv.style.left = `${rect.left + window.scrollX}px`;

            // Remove the 'Hello' div when the mouse moves away from the image
            imgElement.addEventListener('mouseout', function() {
                helloDiv.remove();
            }, { once: true });
        }
    } else if (event.target.tagName === 'SPAN' && event.target.childElementCount === 0) {
        // Traverse upwards in the DOM until an ancestor div containing an image is found
        let parentDiv = event.target.parentElement;
        while (parentDiv && (!parentDiv.querySelector('img') || parentDiv.tagName !== 'DIV')) {
            parentDiv = parentDiv.parentElement;
        }

        if (parentDiv && parentDiv.tagName === 'DIV') {
            // Get the image element within the parent div
            const imgElement = parentDiv.querySelector('img');
            const imgSrc = imgElement.getAttribute('src');

            // Log the image source to the console
            console.log(imgSrc);

            // Create a new div element to display 'Hello'
            const helloDiv = document.createElement('div');
            helloDiv.textContent = 'Hello';
            helloDiv.style.cssText = 'position: absolute; color: white; background-color: black; padding: 5px; border-radius: 5px; z-index: 1000; pointer-events: none;';

            // Append 'Hello' div to the body
            document.body.appendChild(helloDiv);

            // Position the helloDiv below the image
            const rect = imgElement.getBoundingClientRect();
            helloDiv.style.top = `${rect.bottom + window.scrollY}px`;
            helloDiv.style.left = `${rect.left + window.scrollX}px`;

            // Remove the 'Hello' div when the mouse moves away from the image
            event.target.addEventListener('mouseout', function() {
                helloDiv.remove();
            }, { once: true });
        }
    }
  });
