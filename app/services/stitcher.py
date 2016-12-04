#!/usr/bin/env python

import sys
import signal, os
import argparse
import subprocess

try:
    import cv2
except:
    raise Exception('OpenCV is not installed')

def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('-f', default='')
    parser.add_argument('-i', type=int, default=0)
    parser.add_argument('--height', type=int, default=480)
    parser.add_argument('--width', type=int, default=640)
    parser.add_argument('-p', dest='preview', action='store_true')
    parser.add_argument('-s', dest='stream', action='store_true')
    parser.set_defaults(preview=False)
    parser.set_defaults(stream=False)
    return parser.parse_args()

def check_index(index):
    sample_cap = cv2.VideoCapture(index)
    frame = sample_cap.grab()
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
codec = cv2.cv.CV_FOURCC('m', 'p', '4', 'v')
out = cv2.VideoWriter(dest, codec, 20.0, (width, height));
dimensions = str(width) + 'x' + str(height)

if args.stream:
    proc = subprocess.Popen([
        'ffmpeg', '-y', '-f', 'rawvideo',
        '-s', dimensions, '-pix_fmt', 'bgr24', '-i','pipe:0','-vcodec',
        'libx264','-pix_fmt','uyvy422','-r','28','-an', '-f','flv',
        args.url], stdin=subprocess.PIPE)

while(True):
    # Capture frame-by-frame
    ret, frame = cap.read()

    frame = cv2.resize(frame, (width, height))

    if not args.preview:
        out.write(frame);

    if args.stream:
        proc.stdin.write(frame.toString())

    # Display the resulting frame
    cv2.imshow('frame', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
