const admin = require('firebase-admin');


const serviceAccount = require('../../namafileserviceaccount');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://projectid.firebaseio.com",
});

const db = admin.firestore();

module.exports = db;
