import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
   
  apiKey: "AIzaSyBTvb90NKtsyIt7vy6JiPnvNQo_ha6a3Ow",
  authDomain: "messenger-app-c1526.firebaseapp.com",
  databaseURL: "https://messenger-app-c1526-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "messenger-app-c1526",
  storageBucket: "messenger-app-c1526.appspot.com",
  messagingSenderId: "639515198532",
  appId: "1:639515198532:web:69381ae335743ac86aa811",
  measurementId: "G-W14P3QVTW2"
});


const db = firebaseApp.firestore();

export default db;