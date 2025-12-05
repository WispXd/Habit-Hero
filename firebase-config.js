// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP8LvEE3q3VGntVXBHTGBIZVD9YCFLa9I",
  authDomain: "habit-hero-e54ae.firebaseapp.com",
  projectId: "habit-hero-e54ae",
  storageBucket: "habit-hero-e54ae.appspot.com",
  messagingSenderId: "282304773856",
  appId: "1:282304773856:web:d13ea79104251666265a85",
  measurementId: "G-X085JSLGRY"
};

firebase.initializeApp(firebaseConfig);

if (firebase.analytics) {
  firebase.analytics();
}
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();