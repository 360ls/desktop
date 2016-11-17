#!/usr/bin/env python

import sys
import signal, os
import argparse

try:
    import cv2
except:
    raise Exception('OpenCV is not installed')

def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('-f')
    parser.add_argument('-i', type=int)
    parser.add_argument('--height', type=int)
    parser.add_argument('--width', type=int)
    return  parser.parse_args()

def check_index(index):
    sample_cap = cv2.VideoCapture(index)
    frmae = sample_cap.grab()
    sample_cap.release()
    if frame:
        return True
    else:
        return False

def handler(signum, frame):
    # When everything done, release the capture
    cap.release()
    out.release()
    cv2.destroyAllWindows()
    sys.exit(0)

signal.signal(signal.SIGINT, handler)
signal.signal(signal.SIGTERM, handler)

ext = ''
args = parse_args()
dest = args.f + ext
index = args.i
height = args.height
width = args.width

cap = cv2.VideoCapture(index)
codec = cv2.cv.CV_FOURCC('M', 'J', 'P', 'G')
out = cv2.VideoWriter(dest, codec, 20.0, (width, height));

while(True):
    # Capture frame-by-frame
    ret, frame = cap.read()

    frame = cv2.resize(frame, (width, height))

    out.write(frame);

    # Display the resulting frame
    cv2.imshow('frame', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
