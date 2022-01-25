// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const firebase = require('firebase-admin');
firebase.initializeApp();

// firebase db
const db = firebase.firestore()

// firebase auth
const auth = firebase.auth()

const query = db.collection('users')
                .get()
                .then(querySnapshot => {
                const document = querySnapshot.docs.map(doc => doc.data())
                console.log(document)
                })