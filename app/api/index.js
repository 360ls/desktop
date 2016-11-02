import { v4 } from 'node-uuid';

const mockDatabase = {
  videos: [
    {
      id: v4(),
      name: 'Video 1',
      location: 'Chapel Hill, NC',
      date: '10/1/2016',
      uploaded: false,
      flagged: true,
      uri: '../static/cam1.mp4',
    },
    {
      id: v4(),
      name: 'Video 2',
      location: 'Durham, NC',
      date: '10/2/2016',
      uploaded: true,
      flagged: false,
      uri: '../static/cam2.mp4',
    },
    {
      id: v4(),
      name: 'Video 3',
      location: 'Raleigh, NC',
      date: '10/3/2016',
      uploaded: false,
      flagged: true,
      uri: '../static/cam3.mp4',
    },
  ],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchVideos = (filter) =>
  delay(500).then(() => {
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
