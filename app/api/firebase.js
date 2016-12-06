import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAwrohrIqi9rd90SZZu-53P-ZQvuzqLK00',
  authDomain: 'ls-46057.firebaseapp.com',
  databaseURL: 'https://ls-46057.firebaseio.com',
  storageBucket: 'ls-46057.appspot.com',
  messagingSenderId: '207802343853',
};
const firebaseApp = firebase.initializeApp(config);
const database = firebaseApp.database();

export default database;
