const admin = require('firebase-admin');


const serviceAccount = require('../../service-account/soy-beaker-440202-j7-e03a3b850d9d.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://soy-beaker-440202-j7.firebaseio.com",
});

const db = admin.firestore();

module.exports = db;
