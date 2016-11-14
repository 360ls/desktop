import { v4 } from 'node-uuid';
import DropBox from 'dropbox';
import database from './firebase';

const endpoint = '/videos/';

const apiToken = 'KaR5yR5U9kAAAAAAAAAACEtwlnZ-37Qv8Pa403MeFDKOs8Ss7eakvlypcyEqJSG-';
const dbx = new DropBox({
  accessToken: apiToken,
});

export const fetchVideos = (filter) =>
  database.ref(endpoint).once('value').then((snapshot) => {
    const videos = snapshot.val();
    return filterVideos(videos, filter);
  }, (err) => {
    throw new Error(err);
  });

const videoRef = (id) => Promise.resolve(database.ref(endpoint + id));

export const toggleVideo = (id) =>
  videoRef(id).then((ref) => ref).then((ref) => { return ref.transaction((video) => {
      if (video) {
        video.flagged = !video.flagged;
      }
      return video;
    });
  }).then(video => video);

export const addVideo = (video) => {
  const key = endpoint + video.id;
  const entry = {};
  entry[key] = video;

  database.ref.update(entry).then(() => {
    return video;
  }, (err) => {
    throw new Error(err);
  });
};

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
