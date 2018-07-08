import firebase from 'firebase'
import 'firebase/firestore'
const config = {
  apiKey: 'AIzaSyBBUs65_WtGZl45IPRV4XWLrmyjmcVl5nA',
  authDomain: 'vue-firebase-demo-ea883.firebaseapp.com',
  databaseURL: 'https://vue-firebase-demo-ea883.firebaseio.com',
  projectId: 'vue-firebase-demo-ea883',
  storageBucket: '',
  messagingSenderId: '45028215185'
}
const firebaseapp = firebase.initializeApp(config)
export default firebaseapp.firestore()
