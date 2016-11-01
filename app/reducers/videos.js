const rowData = [
  {
    name: 'Video 1',
    location: 'Chapel Hill, NC',
    date: '10/1/2016',
    status: false,
    flag: true,
    uri: 'static/cam1.mp4',
  },
  {
    name: 'Video 2',
    location: 'Durham, NC',
    date: '10/2/2016',
    status: true,
    flag: false,
    uri: 'static/cam2.mp4',
  },
  {
    name: 'Video 3',
    location: 'Raleigh, NC',
    date: '10/3/2016',
    status: false,
    flag: true,
    uri: 'static/cam3.mp4',
  },
];

export default function videos(state = rowData, action) {
  switch (action.type) {
    default:
      return state;
  }
}
