import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA49aW8XsbwmntvHfRzXXscizkgfTBDy_w',
  authDomain: 'catch-of-the-day-bryan-h.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-bryan-h.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// This is a default export
export default base
