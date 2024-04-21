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
which will open up a server at ``127.0.0.1:5000``, if this port is occupied on the localhost, additional work will need to be done to setup this program. 

> [!WARNING]  
> This is a developmental server, and not ready for production. Using this flask server is not intended for continous use but furter development.


### Front End
To setup the front end for this chrome extension, 





# Results

# Demo Video
