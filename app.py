from flask import Flask, request, jsonify
import torch
from flask_cors import CORS
from ultralytics import YOLO
import os


app = Flask(__name__)
CORS(app)  # Enable CORS for all domains on all routes

# Load your custom model
model = YOLO('v6.pt')

@app.route('/analyze', methods=['POST'])
def analyze():
    print("Got Request")
    print(request)
    print()
    print(request.headers)
    data = request.headers.get('imgurl')
    image_url = data
    print(image_url)
    print()
    print()

    result = model(image_url)[0]
    localPath = image_url.split("/")[-1]
    
    try:
        os.remove(localPath)
    except:
        print("Didn't delete")

    resultJson = {}
    print(result.path)
    print(result.probs)
    if result.probs.top1 == 0:
        resultJson["result"] = "fake"
        resultJson["confidence"] = str(result.probs.top1conf.item())
    else:
        resultJson["result"] = "real"
        resultJson["confidence"] = str(result.probs.top1conf.item())

    return jsonify(resultJson), 200

if __name__ == '__main__':
    app.run(debug=True)
