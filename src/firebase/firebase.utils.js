import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD8Zo6X8I9NAVD025jGxvHPYIQM9LLqwTo",
  authDomain: "ecom-app-df03f.firebaseapp.com",
  databaseURL: "https://ecom-app-df03f.firebaseio.com",
  projectId: "ecom-app-df03f",
  storageBucket: "ecom-app-df03f.appspot.com",
  messagingSenderId: "8930758049",
  appId: "1:8930758049:web:ebe79164bc87dd02624fe0",
};

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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
