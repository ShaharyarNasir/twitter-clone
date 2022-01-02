import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDIXsKowMvBYvR1AS1ZWULC1636Oi2RNV0",
    authDomain: "twitter-clone-yt-bbe96.firebaseapp.com",
    projectId: "twitter-clone-yt-bbe96",
    storageBucket: "twitter-clone-yt-bbe96.appspot.com",
    messagingSenderId: "329870466108",
    appId: "1:329870466108:web:ca483b2b8bb2be794ab739"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export default app;
export { db, storage };



