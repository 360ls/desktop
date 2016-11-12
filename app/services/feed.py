#!/usr/bin/env python

import sys

try:
    import pip
except:
    raise Exception('Pip is not installed')

try:
    import cv2
except:
    raise Exception('OpenCV is not installed')

cap = cv2.VideoCapture('dist/sample.avi')

while(cap.isOpened()):
    # Capture frame-by-frame
    ret, frame = cap.read()

    # Display the resulting frame
    cv2.imshow('frame', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# When everything done, release the capture
cap.release()
cv2.destroyAllWindows()
