// import { initializeApp } from "firebase/app";
// import { getFirestore, addDoc } from "firebase/firestore";
// import {
//   collection,
//   orderBy,
//   query,
//   onSnapshot,
//   doc,
//   updateDoc,
// } from "firebase/firestore";

// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBk4FIV1BiSnMhN1KiE6HeifQugTJS0UPs",
//   authDomain: "rides-20981.firebaseapp.com",
//   projectId: "rides-20981",
//   storageBucket: "rides-20981.appspot.com",
//   messagingSenderId: "1032630243338",
//   appId: "1:1032630243338:web:eef4ef9f367cb756488ff3",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// export async function register(userinfo) {
//   try {
//     const { email, password, ConfirmPassword, fullname } = userinfo;
//     await createUserWithEmailAndPassword(auth, email, password);
//     await addDoc(collection(db, "users"), {
//       fullname,
//       email,
//     });
//     alert("Successfully Register");
//   } catch (e) {
//     alert(e.message);
//   }
// }

// export async function login(userinfo) {
//   try {
//     const { email, password } = userinfo;
//     await signInWithEmailAndPassword(auth, email, password);
//     return true; // Return true indicating successful login
//   } catch (e) {
//     alert(e.message);
//     return false; // Return false indicating failed login
//   }
// }

// export { db, collection, orderBy, query, onSnapshot, doc, updateDoc };


import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
  setDoc,
  doc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk4FIV1BiSnMhN1KiE6HeifQugTJS0UPs",
  authDomain: "rides-20981.firebaseapp.com",
  projectId: "rides-20981",
  storageBucket: "rides-20981.appspot.com",
  messagingSenderId: "1032630243338",
  appId: "1:1032630243338:web:eef4ef9f367cb756488ff3",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// DRIVER SIGN-UP
async function driverSignup(userInfo, navigator) {
  try {
    const { name, email, password, userType } = userInfo;
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    delete userInfo.password;
    userInfo.uid = user.uid;
    await setDoc(doc(db, "users/" + user.uid), userInfo);
    navigator && navigator("Dashboard");
  } catch (error) {
    alert(error);
  }
}

// DRIVER-LOGIN
async function driverLogin(userInfo, navigator) {
  try {
    const { email, password } = userInfo;
    await signInWithEmailAndPassword(auth, email, password);
    navigator && navigator("Dashboard");
  } catch (e) {
    alert(e.message);
  }
}

// DRIVER LOCATION
async function saveDriverLocation(driverLocation) {
  try {
    const { latitude, longitude, status } = driverLocation;
    console.log(driverLocation, "driverLocation-inFB");
    await setDoc(doc(db, "location/" + "driver-location"), driverLocation);

    // await addDoc(collection(db, "DriversLocation"), {
    //   latitude,
    //   longitude,
    //   status,
    // });
  } catch (e) {
    alert(e.message);
  }
}

export {
  driverSignup,
  driverLogin,
  collection,
  db,
  query,
  onSnapshot,
  orderBy,
  saveDriverLocation,
};