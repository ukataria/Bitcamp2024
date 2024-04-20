from flask import Flask, request, jsonify
from ultralytics import YOLO
import numpy as np

app = Flask(__name__)
model = YOLO("model.pt")

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    image_url = data['image_url']
    result = model(image_url)
    return jsonify({"result": "fake" if result.probs.top1 == 0 else "real"})

if __name__ == '__main__':
    app.run()
