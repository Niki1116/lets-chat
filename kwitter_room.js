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
//ADD YOUR FIREBASE LINKS HERE
user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+ user_name +"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name-"+ Room_names);
row="<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      
      //End code 
      });});}
getData();
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding Room_name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location="kwitter_page.html";

}
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}