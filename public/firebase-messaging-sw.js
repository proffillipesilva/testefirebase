importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyDHe1JcUlSPxfed-PUrzrNpYU_gHjdunYA",
    authDomain: "test-notifications-f49e8.firebaseapp.com",
    projectId: "test-notifications-f49e8",
    storageBucket: "test-notifications-f49e8.appspot.com",
    messagingSenderId: "876201080502",
    appId: "1:876201080502:web:2db57256d7bf3e44a59817"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(payload);
    const notification = JSON.parse(payload);
    const notificationOption = {
        body: notification.body,
        icon: notification.icon
    };
    return self.registration.showNotification(payload.notification.title, notificationOption);
});