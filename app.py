from flask import Flask, request, jsonify
import torch
from flask_cors import CORS
from ultralytics import YOLO


app = Flask(__name__)
CORS(app)  # Enable CORS for all domains on all routes

# Load your custom model
model = YOLO('model.pt')

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    image_url = data['image_url']

    # Ensure the image_url is a string, since the model expects a URL
    if not isinstance(image_url, str):
        return jsonify({"error": "Invalid image URL type"}), 400


    result = model(image_url)[0]

    if result.probs.top1 == 0:
        return "fake"
    else:
        return "real"

if __name__ == '__main__':
    app.run(debug=True)
