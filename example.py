import requests

# URL of the API endpoint
url = 'http://127.0.0.1:5000/analyze'  # Adjust the path based on how your API is set up

# HTTPS URL of the image
image_url = 'https://i.pinimg.com/236x/ff/1a/95/ff1a95823b63c787584f6f90c83caefc.jpg'

# Send a GET request to download the image
response = requests.get(image_url)

# Check if the download was successful (HTTP status code 200)
if response.status_code == 200:
    # The response content will contain the image data
    image_data = response.content

    # Prepare the files dictionary with the image data in memory
    files = {'image': ('image.jpg', image_data)}

    # Send the POST request with the image
    response = requests.post(url, files=files)

    # Print the response from the server
    print(response.text)
else:
    print("Failed to download image")
