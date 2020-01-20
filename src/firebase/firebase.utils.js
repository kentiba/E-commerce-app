import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAwNMgB4BU-yS5mi1VhHkYlncMhRFnvjTw",
  authDomain: "crown-db-d9bb9.firebaseapp.com",
  databaseURL: "https://crown-db-d9bb9.firebaseio.com",
  projectId: "crown-db-d9bb9",
  storageBucket: "crown-db-d9bb9.appspot.com",
  messagingSenderId: "631528144769",
  appId: "1:631528144769:web:4fcd4b0c2142091b36b280",
  measurementId: "G-X41SEYHV2Q"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// create user profile

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

// google authentication

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
