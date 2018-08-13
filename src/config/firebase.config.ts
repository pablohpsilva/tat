import firebase from '@firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const initObject = {
  apiKey: "AIzaSyCyMCkM7i6MsiiDuFCA_XLO56oxgUDXluw",
  authDomain: "tatapp-84ac1.firebaseapp.com",
  databaseURL: "https://tatapp-84ac1.firebaseio.com",
  messagingSenderId: "19126266499",
  projectId: "tatapp-84ac1",
  storageBucket: "tatapp-84ac1.appspot.com"
}

const app = firebase.initializeApp(initObject)

export default app
