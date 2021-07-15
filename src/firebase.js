import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
        // apiKey: "AIzaSyBufbb2ItjkYNyrX-82_BnXD3nALQoEeQE",
        // authDomain: "mydictionary-c2102.firebaseapp.com",
        // projectId: "mydictionary-c2102",
        // storageBucket: "mydictionary-c2102.appspot.com",
        // messagingSenderId: "94838827258",
        // appId: "1:94838827258:web:8fbaadaa8ed0371bbf4143",
        // measurementId: "G-84KG630KL3"
        apiKey: "AIzaSyDydH5MAgRJXX00g3pBHBUZ7VuO463QF6I",
        authDomain: "board-58de1.firebaseapp.com",
        projectId: "board-58de1",
        storageBucket: "board-58de1.appspot.com",
        messagingSenderId: "1090628759775",
        appId: "1:1090628759775:web:2866ec83d5824e29bbf96a",
        measurementId: "G-CW0XXBNQX8"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
