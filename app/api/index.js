import DropBox from 'dropbox';
import database from './firebase';

const endpoint = '/videos/';

const apiToken = 'KaR5yR5U9kAAAAAAAAAACEtwlnZ-37Qv8Pa403MeFDKOs8Ss7eakvlypcyEqJSG-';
const dbx = new DropBox({
  accessToken: apiToken,
});

const flatten = (object) => {
  const arr = [];
  Object.keys(object).forEach((key) => {
    arr.push(object[key]);
  });

  return arr;
};

export const fetchVideos = (filter) =>
  database.ref(endpoint).once('value').then((snapshot) => {
    const videos = flatten(snapshot.val());
    return filterVideos(videos, filter);
  }, (err) => {
    throw new Error(err);
  });

const getToggledVideo = (video) => {
  const toggledVideo = Object.assign({}, video, {
    flagged: !video.flagged,
  });
  return toggledVideo;
};

export const toggleVideo = (video) =>
  addVideoEntry(getToggledVideo(video));

const filterVideos = (videos, filter) => {
  switch (filter) {
    case 'All':
      return videos;
    case 'Uploaded':
      return videos.filter(v => v.uploaded);
    case 'Flagged':
      return videos.filter(v => v.flagged);
    default:
      throw new Error(`Unknown filter ${filter}`);
  }
};

export const addVideoEntry = (video) =>
  database.ref(endpoint + video.id).set(video)
    .then(response => video)
    .catch((err) => {
      throw new Error(`Failed to add video to database ${err}`);
    });

export const uploadVideo = (videoId, contents) =>
  dbx.filesUpload({ path: `/${videoId}`, contents })
    .then((response) => response)
    .catch((err) => {
      throw new Error(`Upload Error: ${err}`);
    });

export const getSharedLink = (videoId) =>
  dbx.sharingCreateSharedLink({
    path: `/${videoId}`
  })
  .then((response) => response)
  .catch((err) => {
    throw new Error(`Shared Link Error ${err}`);
  });
