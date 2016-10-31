const rowData = [
  {
    name: 'Video 1',
    location: 'Chapel Hill, NC',
    date: '10/1/2016',
    status: false,
    flag: true,
  },
  {
    name: 'Video 2',
    location: 'Durham, NC',
    date: '10/2/2016',
    status: true,
    flag: false,
  },
  {
    name: 'Video 3',
    location: 'Raleigh, NC',
    date: '10/3/2016',
    status: false,
    flag: true,
  },
];

export default function videos(state = rowData, action) {
  switch (action.type) {
    default:
      return state;
  }
}
