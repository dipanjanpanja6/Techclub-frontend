import firebase from "firebase"

// export const url='https://techclubserver.herokuapp.com'
// export const url='https://techclub-official.herokuapp.com'
export const url = process.env.NODE_ENV === "production" ? process.env.REACT_APP_PRODUCTION_ENDPOINT : process.env.REACT_APP_DEVELOPMENT_ENDPOINT

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: "techclubgcect",
  storageBucket: "techclubgcect.appspot.com",
  messagingSenderId: "200360092473",
  appId: process.env.REACT_APP_FIREBASE_API_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
}
firebase.initializeApp(firebaseConfig)
export default firebase
