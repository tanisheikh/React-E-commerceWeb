// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyAE6i6M_In3tqdQjVXYLcC5JluBePDM0d4",
  authDomain: "react-web-notification-b40ff.firebaseapp.com",
  projectId: "react-web-notification-b40ff",
  storageBucket: "react-web-notification-b40ff.appspot.com",
  messagingSenderId: "1040597181751",
  appId: "1:1040597181751:web:a662e3f1c5e9f81f6a66b2",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("payload Msg>>", payload);
  const notificationTitle = payload.notification.title;
  const notificationOption = { body: payload.notification.body ,
    icon: '/firebase-logo.png'
  };
  // navigator.serviceWorker.register();
  // Notification.requestPermission();
  // self.registration.pushManager.subscribe();
  self.registration.showNotification(notificationTitle, notificationOption);

});
