import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAPDhw6kMfqfTsMcGgWlrrH2fIKwoid5a8",
    authDomain: "coderh-ecommerce.firebaseapp.com",
    databaseURL: "https://coderh-ecommerce.firebaseio.com",
    projectId: "coderh-ecommerce",
    storageBucket: "coderh-ecommerce.appspot.com",
    messagingSenderId: "106439492320",
    appId: "1:106439492320:web:0e297275d5f40ede0b0685",
    measurementId: "G-LT66H060P3"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}
