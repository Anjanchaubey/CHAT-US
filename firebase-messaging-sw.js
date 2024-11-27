// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging.js");

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCYY2GQqS0tCXb7Oxw8AWXhpexq9e8VRUs",
    authDomain: "aspirehub-32863.firebaseapp.com",
    projectId: "aspirehub-32863",
    storageBucket: "aspirehub-32863.appspot.com",
    messagingSenderId: "686810111182",
    appId: "1:686810111182:web:4290b4b1b6e64934ec449f",
    measurementId: "G-KX41R0SSMY"
};
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Optional: Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('Received background message: ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
