import firebase from 'firebase'
import 'firebase/firestore'
const config = {
  apiKey: '',
  authDomain: 'vue-firebase-demo-ea883.firebaseapp.com',
  databaseURL: 'https://vue-firebase-demo-ea883.firebaseio.com',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}
const firebaseapp = firebase.initializeApp(config)
export default firebaseapp.firestore()
