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

const createRemovePromises = (ids) => {
  const promises = [];
  for (const id of ids) {
    promises.push(removeVideo(id));
  }

  return promises;
};

export const removeVideos = (ids) =>
  Promise.all(createRemovePromises(ids))
    .then(() => ids)
    .catch((err) => {
      throw new Error(`Failed to delete videos: ${err}`);
    });

export const removeVideo = (id) =>
  database.ref(endpoint + id)
    .remove()
    .then(() => id)
    .catch((err) => {
      throw new Error(`Failed to delete video ${id}: ${err}`);
    });

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
    .then(() => video)
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
    path: `/${videoId}`,
  })
  .then((response) => response)
  .catch((err) => {
    throw new Error(`Shared Link Error ${err}`);
  });

const getIdFromUri = (uri) => {
  const start = uri.lastIndexOf('/');
  const end = uri.lastIndexOf('?');
  return uri.slice(start + 1, end);
};

const createDeletePromises = (uris) => {
  const promises = [];
  for (const uri of uris) {
    promises.push(removeVideo(uri));
  }

  return promises;
};

export const deleteVideo = (videoUri) =>
  dbx.filesDelete({
    path: `/${getIdFromUri(videoUri)}`,
  })
  .then((response) => response)
  .catch((err) => {
    throw new Error(`Error Deleting Video ${err}`);
  });

export const deleteVideos = (videoUris) =>
  Promise.all(createDeletePromises(videoUris))
    .then(() => videoUris)
    .catch((err) => {
      throw new Error(`Error Deleting Videos ${err}`);
    });
