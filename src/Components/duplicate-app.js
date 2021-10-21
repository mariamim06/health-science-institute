import React, {useState } from 'react';
import {  getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword } from "firebase/auth";
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialize';
import background from './Untitled.png';



initializeAuthentication();

const provider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

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

  const toggleLogin = e =>{
    setIsLogin(e.target.checked)
  }

  const handleEmailChange = e =>{
    setEmail(e.target.value);
  }
  const handlePasswordChange = e =>{
    setPassword(e.target.value);
  }

  const handleRegistration = e =>{
      e.preventDefault();
      console.log(email, password);
      if(password.length < 6){
        setError('Password must be at least 6 characters long.')
        return;
      }

      isLogin? processLogin(email, password): registerNewUser(email, password);

     
  }

  const processLogin = (email, password)=>{
      signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        setError(error.message)
      })
  }

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }
  

  return (
    <div className="App p-5"  style={{background: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize:"100%"}}>
    
    <div><h1 className="text-white text-xl-left font-weight-light">HEALTH INSTITUTION</h1></div>

      <form onSubmit={handleRegistration}>
        <h3 className="text-warning p-5 ">Please {isLogin ? 'Login' : 'Register'}</h3>
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
  
  <div className="form-group row">
    <div className="col-sm-2">Checkbox</div>
    <div className="col-sm-10">
      <div className="form-check">
        <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1">
          Already Registered?
        </label>
      </div>
    </div>
  </div>
  
    <div className="row mb-3 text-danger">{error}</div>
    <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
   
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
