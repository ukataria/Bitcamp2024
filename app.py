from flask import Flask, request, jsonify
import torch
from flask_cors import CORS
from ultralytics import YOLO


app = Flask(__name__)
CORS(app)  # Enable CORS for all domains on all routes

# Load your custom model
model = YOLO('V4.pt')

@app.route('/analyze', methods=['POST'])
def analyze():
    print("Got Request")
    print(request)
    data = request.args.get("imgurl")
    image_url = data
    print(image_url)
    print()
    print()

    result = model(image_url)[0]

    resultJson = {}
    print(result.path)
    print(result.probs)
    if result.probs.top1 == 0:
        resultJson["result"] = "fake"
        resultJson["confidence"] = str(result.probs.top1conf)
    else:
        resultJson["result"] = "real"
    
    return jsonify(resultJson), 200

if __name__ == '__main__':
    app.run(debug=True)
