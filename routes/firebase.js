var firebase = require('firebase')

var config = {
    apiKey: "AIzaSyCmH8S_RaIB8TG70QGHeqRdT07xE5Xzvnk",
    authDomain: "axiom-app-281509.firebaseapp.com",
    databaseURL: "https://axiom-app-281509.firebaseio.com",
    projectId: "axiom-app-281509",
    storageBucket: "axiom-app-281509.appspot.com",
    messagingSenderId: "108116724130",
    appId: "1:108116724130:web:230baed50e4bd29ee1cafb",
    measurementId: "G-BYHF517D2R"
};

var fire = firebase.initializeApp(config);
module.exports = fire