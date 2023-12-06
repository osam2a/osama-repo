import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC2DE6KdBy95FkqVpk26JFthAazE27eJ1c',
  authDomain: 'e-commers-97d51.firebaseapp.com',
  projectId: 'e-commers-97d51',
  storageBucket: 'e-commers-97d51.appspot.com',
  messagingSenderId: '764853163128',
  appId: '1:764853163128:web:f09c2e9f09486d363ec98d',
  measurementId: 'G-FQ84261ZHN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const GooglesignInWithPopup = () => signInWithPopup(auth, provider);
export const GoogleSignInWithRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const getDataFromAuht = async (userAuth, additionalInfo) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapShat = getDoc(userDocRef);

  if (!(await userSnapShat).exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        email,
        displayName,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(`can't creat new user ${error.massage}`);
    }
  }
  return userDocRef;
};

export const getDataFromAuhtRedirect = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
};

export const signUpUsingEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUsingEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
