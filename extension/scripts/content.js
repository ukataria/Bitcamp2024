// Listen for mouseover events on all elements
document.addEventListener('mouseover', function(event) {
  if (event.target.tagName === 'IMG' ) {
    const imgSrc = event.target.getAttribute('src');
    // Log the image element to the console
    console.log(imgSrc);

    // Create a new div element to display 'Hello'
    const helloDiv = document.createElement('div');
    helloDiv.textContent = 'Hello';
    helloDiv.style.cssText = 'position: absolute; color: white; background-color: black; padding: 5px; border-radius: 5px; z-index: 1000; pointer-events: none;';

    // Append 'Hello' div to the body
    document.body.appendChild(helloDiv);

    // Position the helloDiv below the image
    const rect = event.target.getBoundingClientRect();
    helloDiv.style.top = `${rect.bottom + window.scrollY}px`;
    helloDiv.style.left = `${rect.left + window.scrollX}px`;

    // Remove the 'Hello' div when the mouse moves away
    event.target.addEventListener('mouseout', function() {
      helloDiv.remove();
    }, { once: true });
  }
});
