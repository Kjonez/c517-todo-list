import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDSr_5Oe7z8JHOjl_NbB0OlfHzH7gndQNU",
    authDomain: "todo-react-d1465.firebaseapp.com",
    databaseURL: "https://todo-react-d1465.firebaseio.com",
    projectId: "todo-react-d1465",
    storageBucket: "todo-react-d1465.appspot.com",
    messagingSenderId: "27041358865"
};
firebase.initializeApp(config);

export const db = firebase.database();
