import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

const config = {
    apiKey: "AIzaSyAOAsnFEsNJevLLbVimjt3WS9vsf1Da5OI",
    authDomain: "crwn-app-dbd90.firebaseapp.com",
    databaseURL: "https://crwn-app-dbd90.firebaseio.com",
    projectId: "crwn-app-dbd90",
    storageBucket: "crwn-app-dbd90.appspot.com",
    messagingSenderId: "172929212861",
    appId: "1:172929212861:web:cefdcb782f7d8e03b1f2d4",
    measurementId: "G-X51Y2HHRC8"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`)
  
    const snapShot = await userRef.get()
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }
  
    return userRef
  }

  firebase.initializeApp(config)
  firebase.analytics()


  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider).then(function(result) {

  }).catch(function(error) {
    console.log(error.message);
   
  });

  export default firebase