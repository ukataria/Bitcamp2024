from ultralytics import YOLO
import numpy as np
model = YOLO("model.pt")

def analyze(filePath):
    print("Begun Analyzing")
    result = model(filePath)[0]
    print("Finished Analyzing")
    if result.probs.top1 == 0:
        return "fake"
    else:
        return "real"

print("HI1")
if __name__ == "__main__":
    print("HI2")
    print(analyze("photos/hackathon-fake.webp"))