
//ADD YOUR FIREBASE LINKS HERE


      //Start code
      var firebaseConfig = {
            apiKey: "AIzaSyDNxoME0pEVBxS_KOT7-1dVhhgr1h3DBkI",
            authDomain: "letschatwebapp-dbc4d.firebaseapp.com",
            databaseURL: "https://letschatwebapp-dbc4d-default-rtdb.firebaseio.com",
            projectId: "letschatwebapp-dbc4d",
            storageBucket: "letschatwebapp-dbc4d.appspot.com",
            messagingSenderId: "173959192046",
            appId: "1:173959192046:web:3cdf57e255fccbb5a442ff",
            measurementId: "G-1GCV2GZTEY"
          };
          
          // Initialize Firebase
         firebase.initializeApp(firebaseConfig);
          
      //End code
      function Addroom(){
            roomname=document.getElementById("roomname").value;
            firebase.database().ref("/").child(roomname).update({
                purpose:"addingroom"
            });
      };;

