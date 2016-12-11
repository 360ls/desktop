#!/usr/bin/env python

"""
Script for streaming a camera feed
"""

import sys
import signal
import argparse
import subprocess

try:
    import cv2
except:
    raise Exception('OpenCV is not installed')

def parse_args():
    """
    Parses command line arguments
    """
    parser = argparse.ArgumentParser()
    parser.add_argument('-f', default='')
    parser.add_argument('-i', type=int, default=0)
    parser.add_argument('-p', dest='preview', action='store_true')
    parser.add_argument('-s', dest='stream', action='store_true')
    parser.add_argument('--width', type=int, default=640)
    parser.add_argument('--height', type=int, default=480)
    parser.add_argument('--url', dest='url', default='rtmp://54.227.214.22:1935/live/myStream')
    parser.add_argument('--debug', dest='debug', action='store_true')
    parser.add_argument('--frames', type=int, default=100)
    parser.add_argument('--playback', dest='playback', action='store_true')
    parser.set_defaults(preview=False)
    parser.set_defaults(stream=False)
    return parser.parse_args()

def main():
    """
    Parses command line arguments and starts the stitcher
    """
    args = parse_args()
    dest = args.f
    index = args.i
    height = args.height
    width = args.width
    count = 0

    if args.playback:
        cap = cv2.VideoCapture(args.f)
    else:
        cap = cv2.VideoCapture(index)

    codec = cv2.cv.CV_FOURCC('m', 'p', '4', 'v')
    dimensions = str(width) + 'x' + str(height)

    if args.f and not args.playback:
        out = cv2.VideoWriter(dest, codec, 20.0, (width, height))

    def handler(signum, frame): # pylint: disable=unused-argument
        """
        Interrupt handler
        """
        # When everything done, release the capture
        cap.release()
        if args.f and not args.playback:
            out.release()
        cv2.destroyAllWindows()
        sys.exit(0)

    signal.signal(signal.SIGINT, handler)
    signal.signal(signal.SIGTERM, handler)

    if args.stream:
        proc = subprocess.Popen([
            'ffmpeg', '-y', '-f', 'rawvideo',
            '-s', dimensions, '-pix_fmt', 'bgr24', '-i', 'pipe:0', '-vcodec',
            'libx264', '-pix_fmt', 'uyvy422', '-r', '28', '-an', '-f', 'flv',
            args.url], stdin=subprocess.PIPE)

    if args.playback:
        playback(cap, args.width, args.height)
    else:
        while True:
            if args.debug and count > args.frames:
                break

            count += 1

            # Capture frame-by-frame
            _, frame = cap.read()

            frame = cv2.resize(frame, (width, height))

            if args.f:
                out.write(frame)

            if args.stream:
                proc.stdin.write(frame.tostring())

            # Display the resulting frame
            cv2.imshow('frame', frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

def playback(cap, width, height):
    while (cap.isOpened()):
        # Capture frame-by-frame
        _, frame = cap.read()

        # Display the resulting frame
        cv2.imshow('frame', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

if __name__ == "__main__":
    main()
