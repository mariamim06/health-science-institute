import React, {useState } from 'react';
import {  getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialize';
import background from './Untitled.png';



initializeAuthentication();

const provider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth()

  const handleGoogleSignIn = () => {
    
    signInWithPopup(auth, provider)
    .then(result => {
      const {displayName, email, photoURL} = result.user;
      const loggedInUser = {
        name: displayName,
        email: email,
        photo: photoURL
      };
      setUser(loggedInUser);
    })
    .catch((error) => {
      console.log(error.message);
    })
  }

  const handleSignOut = () =>{
    signOut(auth)
    .then( () => {
      setUser({});
    })
  }

  const handleEmailChange = e =>{
    setEmail(e.target.value);
  }
  const handlePasswordChange = e =>{
    setPassword(e.target.value);
  }

  const handleRegistration = e =>{
      console.log(email, password);
      createUserWithEmailAndPassword(auth, email, password)
      .then(result =>{
        const user = result.user;
        console.log(user);
      })
      e.preventDefault();
  }

  return (
    <div className="App p-5"  style={{background: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize:"100%"}}>
    
    <div><h1 className="text-white text-xl-left font-weight-light">HEALTH INSTITUTION</h1></div>

      <form onSubmit={handleRegistration}>
        <h3 className="text-warning p-5 ">Please Register</h3>
  <div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Email" required/>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder="Password" required/>
    </div>
  </div>
  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
          <label className="form-check-label" for="gridRadios1">
            First radio
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
          <label className="form-check-label" for="gridRadios2">
            Second radio
          </label>
        </div>
        <div className="form-check disabled">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
          <label className="form-check-label" for="gridRadios3">
            Third disabled radio
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <div className="form-group row">
    <div className="col-sm-2">Checkbox</div>
    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">Register</button>
    </div>
  </div>
</form>

      <br /><br /><br />
      <div>------------------------------------------------------</div>
      <br /><br /> <br />
    { !user.name ?
      <button onClick={handleGoogleSignIn}>Google sign in</button>
      :
      <button onClick={handleSignOut}>Sign Out</button>
    }
    
      <br />
      {
        user.email && <div>
          <h2>Welcome {user.name}</h2>
         
        </div>
      }
      
    </div>
  );
}

export default App;
