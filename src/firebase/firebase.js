import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBh7ek6Y3MTcXHJHLXe5yg1aPV8FjBWXBY",
    authDomain: "expensifyapp-c7b95.firebaseapp.com",
    databaseURL: "https://expensifyapp-c7b95.firebaseio.com",
    projectId: "expensifyapp-c7b95",
    storageBucket: "expensifyapp-c7b95.appspot.com",
    messagingSenderId: "976430915261"
};
firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Simon McKone',
    age: 43,
    isSingle: false,
    location: {
        town: 'Chorley',
        country: 'UK'
    }    
}).then(() => {
    console.log("Data saved");
}).catch((e) => {
    console.log("An error occured", e);
});

// database.ref('isSingle').remove().then(() => {
//     console.log("Removed value");
// }).catch((e) => {
//     console.log("Removed failed " + e.message);
// });

database.ref('isSingle').set(null);