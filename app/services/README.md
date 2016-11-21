# Sticher

The electron application uses the stitcher functionality provided by the
python script defined in `stitcher.py`.

## Command Line Interface
The following command line options are expected from the python script:

* `-f`: file path to which the video stream from the camera will
be save to excluding the extension.
* `-i`: index of the camera to be captured (default is `0`).
* `-p`: preview the camera stream; will not write stream to file.
* `-s`: stream the camera feed with `ffmpeg`.
* `--leftIndex`: index of left stream
* `--rightIndex`: index of right stream
* `--width`: width dimension of the output video (default is `640`).
* `--height`: height dimension of the output video (default is `480`).
* `--url`: `RTMP` url to be streamed to.
* `--stitch`: stitch two incoming streams specified by `leftIndex` and `rightIndex`.

## Expected Usage

Preview index 0:
```bash
$  ./stitcher.py -p -i 0
```

Stream index 0 to `rtmp:stream_address`:
```bash
$  ./stitcher.py -s -i 0 --url rtmp:stream_address
```

Save stream 0 to `out.avi`:
```bash
$  ./stitcher.py -f out.avi -i 0
```

Save stream 0 to `out.avi` with dimensions `1280x720`:
```bash
$  ./stitcher.py -f out.avi -i 0 --width 1280 --height 720
```

Stitch index 0 and index 1:
```bash
$  ./stitcher.py --stitch --leftIndex 0 --rightIndex 1
```

Stitch index 0 and index 1 and save to `out.avi`
```bash
$  ./stitcher.py --stitch --leftIndex 0 --rightIndex 1 -f out.avi
```

Stitch index 0 and index 1 and save to `out.avi` and stream to `rtmp:stream_address`
```bash
$  ./stitcher.py -s --stitch --leftIndex 0 --rightIndex 1 -f out.avi --url rtmp:stream_address
```


## IPC

The electron application will be communicating with the python
script via IPC. The following information will be expected from the python script.

* `validated`: `true` if the specified camera index was valid.
