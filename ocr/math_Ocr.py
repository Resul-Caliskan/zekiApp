# -*- coding: utf-8 -*-
"""
Created on Mon Oct 16 20:16:11 2023

@author: resul
"""

# import cv2
# import numpy as np
# from OCR_Math_Expressions import ocr_math_expression

# # Load the image
# img = cv2.imread('math.png')

# # Convert the image to grayscale
# gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# # Detect the mathematical expression in the image
# expression = ocr_math_expression(gray)

# # Print the detected expression
# print(expression)

import cv2
import numpy as np

# Load the image
img = cv2.imread('math.png')

# Preprocess the image
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
blur = cv2.GaussianBlur(gray, (5, 5), 0)
thresh = cv2.adaptiveThreshold(blur, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 11, 2)

# Find contours in the image
contours, hierarchy = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Loop over the contours
for contour in contours:
    # Get the bounding rectangle
    x, y, w, h = cv2.boundingRect(contour)

    # Extract the region of interest
    roi = thresh[y:y+h, x:x+w]

    # Resize the region of interest
    roi = cv2.resize(roi, (28, 28), interpolation=cv2.INTER_AREA)

    # Flatten the image
    roi = roi.reshape(1, 784)

    # Normalize the image
    roi = roi.astype('float32')
    roi /= 255

    # Load the machine learning model
    model = load_model('model.h5')

    # Predict the output
    result = model.predict(roi)

    # Print the result
    print(result)
