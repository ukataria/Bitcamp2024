# Audit-AI
Created for BitCamp2024, https://bit.camp/, Audit-AI is an application focused on detecting if an image is AI Generated or not. With the proliferation of software like Dall-E, Midjourney, and Stable Diffusion, AI Art is easy to come across and can often act as an imposter in places celebrating independent artists. As a result, we created Audit-AI, which audits images to make sure that if they are claimed to be created by a real person, they are actually created by one. 

To use this application, we have created a developmental Chrome extension that works with a majority of image sites, including pinterest.com. This requires taking a look at the developer settings in Chrome but is well worth the effort. Alongside the main Chrome extension, we created a small game to showcase just how difficult it is to distinguish between AI and manmade images. The setup instructions for this fun website can be viewed right after the Chrome extension. 

# Setup
## Chrome Extension

### Back End
There are two components to set up the Chrome extension, the first one being a Python server that does the actual machine-learning inference. This allows for the computer to take access of rich libraries like Pytorch, and Ultralytics. To set up the Python backend server, first off, we recommend creating a virtual environment. 

**Requirements:** A python version >= 3.10. 

Here is a link to Python docs about creating a virtual environment: https://docs.python.org/3/library/venv.html 

After entering the virtual environment or directly in your home environment, run the following command to get the required packages for this package.
```
  pip install -r requirements.txt
```

After setting up the library, navigate yourself such that your working directory is ``Bitcamp2024``. From there, run 
```python
python app.py
```
which will open up a server at ``127.0.0.1:5000``, if this port is occupied on the localhost, additional work will need to be done to set up this program. 

> [!WARNING]  
> This is a developmental server, and not ready for production. Using this flask server is not intended for continuous use but for further development.


### Front End
This is primarily based upon use as a Chrome extension and thus will require a Chromium browser. This was primarily developed for Google Chrome, but other Chromium based browsers such as Edge and Brave should also work. 

> [!IMPORTANT]  
> Since Chrome Extensions are developed for Chromium, this extension is unlikely to work on Firefox.

Here are the setup instructions:
1. Open up the extensions manager as a part of your browser and turn on ``Developer Mode``
2. Then click on ``Load unpacked``, and upload the folder ``~/Bitcamp2024/extensions``
3. Afterward, you should see the extension loaded on your menu bar and begin operating. _Make sure to start the server before expecting results_

# Methodology
The primary algorithm to detect if an image is AI-generated is to use a Convolution Neural Network (CNN). To train such an algorithm, we need a lot of data, a method to train, and a way to test if our results are useful or not. 

## Data
To get a variety of AI Generated and manmade images, we turned to datasets on Kaggle. Using Kaggle, we found out about 4 different datasets, each with its pros and cons. 
1. {}
2. {}
3. {}
4. {}

For each of these datasets, we split the data into two classes, either "Fake" if it was AI Generated, or "Real" if it was human-drawn. Afterward, we split it into train, test, and validation folders for the model to learn and test itself, using 0.8, 0.1, and 0.1 splits. Due to the limited time in the hackathon, we were unable to experiment with different data splits, including 0.7, 0.2, and 0.1. 

## Training
To train our code, we did not have the large amount of data required to train a CNN from scratch, which we estimate to be at least 10 times the size of our largest dataset. As a result, we worked off a pre-existing model, the YoloV8 from Ultralytics, an industry-leading single classification model. Upon this model, we trained our 4 different datasets with a variety of epochs, from 10 to 50, depending on the size of the dataset, and the overall trend we noticed. Since we had limited compute availability and a severe time crunch, optimizing for image size was not a possibility, so a default value of ``640`` was used. 

We trained a majority of our code on Google Collab, working off their L4 Hardware Accelerators. The code for training these systems can be found by ``train.ipynb``, and would download the small version of the model. Again, due to time constraints, we did not have the time to utilize the larger models such as the medium or large versions, and we found that nano was not great at picking apart minor differences. 

## Testing
To test our code, we used both the built-in test folder of data and a variety of real-world tests. Since the datasets that we trained on had very different characteristics, each of the models we trained was quite good at detecting the differences between AI and Human images within their respective styles, but could severely struggle in real-world tests or on other datasets.

This is why we implemented a real-world testing procedure of working on Pinterest images that none of the models had ever seen, and then using that to judge overall performance. We would test for confidence and accuracy levels, and throughout the hackathon, we continued to find better datasets and improvements to further fine tune our models and increase their performance. 

# Results

# Demo Video
