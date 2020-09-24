// Your web app's Firebase configuration
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

//Sandbox
const firebaseConfigSandbox = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DB_URL,
  projectId: 'evro-backend',
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDING_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID,
};
//Live
const firebaseConfigLive = {
  apiKey: process.env.FB_API_KEY_LIVE,
  authDomain: process.env.FB_AUTH_DOMAIN_LIVE,
  databaseURL: process.env.FB_DB_URL_LIVE,
  projectId: 'evro-live-backend',
  storageBucket: process.env.FB_STORAGE_BUCKET_LIVE,
  messagingSenderId: process.env.FB_MESSAGING_SENDING_ID_LIVE,
  appId: process.env.FB_APP_ID_LIVE,
  measurementId: process.env.FB_MEASUREMENT_ID_LIVE,
};
// Initialize Firebase
try {
  if (process.env.GCLOUD_PROJECT === 'evro-backend-sandbox') {
    firebase.initializeApp(firebaseConfigSandbox);
    firebase.storage();
  } else {
    firebase.initializeApp(firebaseConfigLive);
    firebase.storage();
  }
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}
const fire = firebase;
export default fire;
