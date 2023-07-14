// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import 'firebase/compat/messaging'

import {
  getMessaging,
  getToken,
  onMessage,
  deleteToken,
} from "firebase/messaging";
console.log("getMessaging>>", getMessaging, "onMessage>>", onMessage);

console.log("firebase>>", firebase);
const firebaseConfig = {
  apiKey: "AIzaSyAE6i6M_In3tqdQjVXYLcC5JluBePDM0d4",
  authDomain: "react-web-notification-b40ff.firebaseapp.com",
  projectId: "react-web-notification-b40ff",
  storageBucket: "react-web-notification-b40ff.appspot.com",
  messagingSenderId: "1040597181751",
  appId: "1:1040597181751:web:a662e3f1c5e9f81f6a66b2",
  measurementId: "G-MBYGG7QJXD",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
const messaging = getMessaging(app);

export const getTokenFunc = (setIsTokenFound) => {
  console.log("function called getTokenFunc>>>");
  return getToken(messaging, {
    vapidKey:
      "BMyELMkf6nfKX8o2mv0cvxTfXVb8mwjp9GHnQXv9YCRyY1k4cqgNoCKfEyf1yZm6H1_m3mbRv9wbZ7e9z7okV5E",
  })
    .then((currentToken) => {
      console.log("currentToken>>", currentToken);
      if (currentToken) {
        setIsTokenFound(true);
      } else {
        setIsTokenFound(false);
      }
    })
    .catch((error) => {
      console.log("error>>", error);
    });
};

// export const deleteTokenFunc = (setIsTokenFound) => {
//   messaging.getToken().then((currentToken) => {
//     deleteToken(
//       currentToken.then(() => {
//         setIsTokenFound(false);
//       })
//     );
//   });
// };
export const onMessageListener = () => {
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
};
