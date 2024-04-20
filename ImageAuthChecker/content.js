document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseover', () => {
      fetch('https://your-api-url.com/predict', {
        method: 'POST',
        body: JSON.stringify({imageUrl: img.src}),
        headers: {'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .then(data => {
        alert(data.prediction); // 'Real' or 'Fake'
      });
    }); 
  });
