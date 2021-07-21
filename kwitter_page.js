user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDbpTFYZxAiNCy6_6G4rs-Z6-DuBX--Uww",
      authDomain: "kwitter-7717d.firebaseapp.com",
      databaseURL: "https://kwitter-7717d-default-rtdb.firebaseio.com",
      projectId: "kwitter-7717d",
      storageBucket: "kwitter-7717d.appspot.com",
      messagingSenderId: "562469755875",
      appId: "1:562469755875:web:2a3e2311964e1981871ed6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      
      });
      document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}