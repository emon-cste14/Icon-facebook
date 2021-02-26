import logo from './logo.svg';
import './App.css';
import FacebookIcon from './Component/Facebook-icon';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './Component/FirebaseConfig'
import React,{useState} from 'react'

firebase.initializeApp(firebaseConfig);
function App() {
  var provider = new firebase.auth.GoogleAuthProvider();
  const [user, setuser] = useState({
           logIn:false,
           name:'',
           email:'',
           photo:''
  })

  function signIn(){
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    const {displayName,email,photoURL}=result.user
    const signResult={
      logIn:true,
      name:displayName,
      email:email,
      photo:photoURL

    }
    setuser(signResult)


  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
   
  }
  function signOut(){
    firebase.auth().signOut().then(() => {

      const signOut={
        logIn:false,
        name:'',
        email:'',
        photo:''
  
      }
      setuser(signOut)
      
    }).catch((error) => {
      // An error happened.
    });
  }
 
  return (
    <div className="App">
      <h1>Facebook post-react practice</h1>
          <FacebookIcon /><br /><br />
          {
              user.logIn ? <button onClick={signOut}>Sign-out</button> : <button onClick={signIn}>Sign-in</button>

          }
          {
            user.logIn && <p>Welcome {user.email}</p>
          }
    </div>
  );
}

export default App;
