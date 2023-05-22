const firebaseConfig = {
      apiKey: "AIzaSyA8tjKsvPwqW01BIQg1LvWd2lokoxxNpi0",
      authDomain: "c94-e6b7c.firebaseapp.com",
      projectId: "c94-e6b7c",
      storageBucket: "c94-e6b7c.appspot.com",
      messagingSenderId: "466291510776",
      appId: "1:466291510776:web:0ac287eaf1ec0fede6da0d"
    };
//ADD YOUR FIREBASE LINKS HERE
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
