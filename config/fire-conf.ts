// Your web app's Firebase configuration
import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBiosgUplYM4J9DDD0tZ9EV6udQgU89Mt8',
  authDomain: 'evro-backend.firebaseapp.com',
  databaseURL: 'https://evro-backend.firebaseio.com',
  projectId: 'evro-backend',
  storageBucket: 'evro-backend.appspot.com',
  messagingSenderId: '795403735260',
  appId: '1:795403735260:web:7691d3180d4c1c0fe3e419',
};
// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
  firebase.storage();
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}
const fire = firebase;
export default fire;
