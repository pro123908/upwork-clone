import app from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBU_5Nj72Du_6dJQp6KKrhNe0NSMFz-2Jw",
  authDomain: "upwork-clone-4cf4e.firebaseapp.com",
  databaseURL: "https://upwork-clone-4cf4e.firebaseio.com",
  projectId: "upwork-clone-4cf4e",
  storageBucket: "upwork-clone-4cf4e.appspot.com",
  messagingSenderId: "1060413273300",
  appId: "1:1060413273300:web:a1252da6d3674d068ff741",
  measurementId: "G-ESJ3BP4R8R",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();

    this.provider = new app.auth.GoogleAuthProvider();
  }

  signUserWithGoogle = (googleResponseCallback) => {
    this.auth
      .signInWithPopup(this.provider)
      .then((result) => {
        console.log("Result -> ", result);

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        return googleResponseCallback({ token, user });
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
}

export default Firebase;
