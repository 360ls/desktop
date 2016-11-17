## Sticher

The electron application uses the stitcher functionality provided by the
python script defined in `stitcher.py`.

## Command Line Interface
The following command line options are expected from the python script:

* `-f`: The file path to which the video stream from the camera will
be save to.
* `-i`: The index of the camera to be captured.

## IPC

The electron application will be communicating with the python
script via IPC. The following information will be expected from the python script.

* `validated`: `true` if the specified camera index was valid.
