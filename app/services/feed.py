#!/usr/bin/env python

import sys

try:
    import pip
except:
    raise Exception('Pip is not installed')

try:
    import cv2
except:
    raise Exception('OpenCv is not installed')

cap = cv2.VideoCapture(0)

while(True):
    # Capture frame-by-frame
    ret, frame = cap.read()


    # Display=`=jedi=0,  the resulting frame=`= (winname, *_*mat*_*) =`=jedi=`=
    cv2.imshow('frame', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# When everything done, release the capture
cap.release()
cv2.destroyAllWindows()
