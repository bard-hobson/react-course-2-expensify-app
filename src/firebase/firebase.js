import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('notes/-LogI3jiq00S_0zigawN').update({
//     body: 'buy food'
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childOfSnapshot) => {
//             expenses.push({
//                 id: childOfSnapshot.key,
//                 ...childOfSnapshot.val()
//             })
//         });

//         console.log(expenses);
//     }, (e) => {
//         console.log('Error fetching data: ', e.message);
//     });

// database.ref().update({
//      'job/title': 'Book keeper'
// });

// database.ref('notes').push({
//     title: 'First note',
//     body: 'This is my note'
// });

// database.ref('notes').push({
//     title: 'React course',
//     body: 'Note here about React'
// });

// const firebaseNotes = {
//     notes: {
//         apoissdfa: {
//             title: 'First note',
//             body: 'This is my note'
//         },
//         apsdfkjaalweqw: {
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     }
// }
// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'
// },{
//     id: '761ase',
//     title: 'Another note',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);
// database.ref()
//     .on('value', (snapshot) => {
//         const val = snapshot.val();
//         console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//     }, (e) => {
//         console.log('Error fetching data : ', e.message);
//     });

// database.ref().update({
//     'job/title': 'Book keeper'
// });

// database.ref().set({
//     name: 'Brad Hobson',
//     age: 37,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Caterpillar'
//     },
//     location: {
//         city: 'Peoria',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('name data is saved!');
// }).catch((e) => {
//     console.log('This failed : ', e.message);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('Data updated!');
// }).catch((e) => {
//     console.log('Data update failed : ', e.message);
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Remove succeeded.');
//     }).catch((e) => {
//         console.log('Remove failed: ', e.message);
//     });