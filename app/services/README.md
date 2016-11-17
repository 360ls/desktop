## Sticher

The electron application uses the stitcher functionality provided by the
python script defined in `stitcher.py`.

## Command Line Interface
The following command line options are expected from the python script:

* `-f`: file path to which the video stream from the camera will
be save to excluding the extension.
* `-i`: index of the camera to be captured (default is `0`).
* `-p`: preview the camera stream; will not write stream to file.
* `-s`: stream the camera feed with `ffmpeg`.
* `--width`: width dimension of the output video (default is `640`).
* `--height`: height dimension of the output video (default is `480`).
* `--url`: `RTMP` url to be streamed to.

## IPC

The electron application will be communicating with the python
script via IPC. The following information will be expected from the python script.

* `validated`: `true` if the specified camera index was valid.
