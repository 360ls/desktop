#!/usr/bin/env python

import sys
import signal, os
import argparse

try:
    import pip
except:
    raise Exception('Pip is not installed')

try:
    import cv2
except:
    raise Exception('OpenCV is not installed')

def handler(signum, frame):
    # When everything done, release the capture
    cap.release()
    out.release()
    cv2.destroyAllWindows()
    sys.exit(0)

signal.signal(signal.SIGINT, handler)

parser = argparse.ArgumentParser()
parser.add_argument('-f')
args = parser.parse_args()

dest = args.f

cap = cv2.VideoCapture(1)
out = cv2.VideoWriter(dest, -1, 20.0, (640, 480));

while(True):
    # Capture frame-by-frame
    ret, frame = cap.read()

    frame = cv2.resize(frame, (640, 480))

    out.write(frame);

    # Display the resulting frame
    cv2.imshow('frame', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
