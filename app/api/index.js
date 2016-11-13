import { v4 } from 'node-uuid';
import DropBox from 'dropbox';

const mockDatabase = {
  videos: [
    {
      id: v4(),
      name: 'Video 1',
      location: 'Chapel Hill, NC',
      date: '10/1/2016',
      uploaded: false,
      flagged: true,
      uri: 'https://vimeo.com/190568226',
    },
    {
      id: v4(),
      name: 'Video 2',
      location: 'Durham, NC',
      date: '10/2/2016',
      uploaded: true,
      flagged: false,
      uri: 'https://vimeo.com/190568227',
    },
    {
      id: v4(),
      name: 'Video 3',
      location: 'Raleigh, NC',
      date: '10/3/2016',
      uploaded: false,
      flagged: true,
      uri: 'https://vimeo.com/190568228',
    },
  ],
};

const apiToken = 'KaR5yR5U9kAAAAAAAAAACEtwlnZ-37Qv8Pa403MeFDKOs8Ss7eakvlypcyEqJSG-';
const dbx = new DropBox({
  accessToken: apiToken,
});

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchVideos = (filter) => // eslint-disable-line import/prefer-default-export
  delay(1000).then(() => {
    if (Math.random() > 0.7) {
      throw new Error('Network Error! Videos could not be fetched.');
    }

    switch (filter) {
      case 'All':
        return mockDatabase.videos;
      case 'Uploaded':
        return mockDatabase.videos.filter(t => t.uploaded);
      case 'Flagged':
        return mockDatabase.videos.filter(t => t.flagged);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });

export const toggleVideo = (id) =>
  delay(500).then(() => {
    const video = mockDatabase.videos.find(v => v.id === id);
    video.flagged = !video.flagged;
    return video;
  });

export const uploadVideo = (videoId, contents) =>
  dbx.filesUpload({ path: `/${videoId}`, contents })
    .then((response) =>
      response
    )
    .catch((err) => {
      console.log(err);
      throw new Error(`Upload Error: ${err}`);
    });
