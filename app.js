const imageUrl = "https://i.pinimg.com/474x/53/0f/c5/530fc5dc0060c55c2c18f88bc0ed93b0.jpg"; // Replace this with your image URL

// Define the data object with the header
const data = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'imgurl': imageUrl
  }
};

// Make the fetch request to your Flask server
fetch('http://127.0.0.1:5000/analyze', data)
  .then(response => {
    // Handle the response
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Assuming the server returns JSON
  })
  .then(jsonResponse => {
    // Handle the JSON response
    console.log(jsonResponse);
  })
  .catch(error => {
    // Handle errors
    console.error('There was a problem with your fetch operation:', error);
  });
