// Attach hover event to the document, listening for mouse entering image elements
document.addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'IMG') {
      const existingHello = document.querySelector('.hello-text');
      if (existingHello) {
        existingHello.remove();  // Remove any existing 'Hello' to prevent duplicates
      }
      
      // Create and style the 'Hello' div
      const helloDiv = document.createElement('div');
      helloDiv.className = 'hello-text';
      helloDiv.textContent = 'Hello';
      helloDiv.style.cssText = 'position: absolute; color: white; background-color: black; padding: 5px; border-radius: 5px; z-index: 1000;';
      document.body.appendChild(helloDiv);
  
      // Position it below the hovered image
      const rect = event.target.getBoundingClientRect();
      helloDiv.style.top = `${rect.bottom + window.scrollY}px`;  // Adjust for scrolling
      helloDiv.style.left = `${rect.left + window.scrollX}px`;
    }
  });
  
  // Remove the 'Hello' text when the mouse leaves an image
  document.addEventListener('mouseout', function(event) {
    if (event.target.tagName === 'IMG') {
      const helloDiv = document.querySelector('.hello-text');
      if (helloDiv) {
        helloDiv.remove();
      }
    }
  });
  