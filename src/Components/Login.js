import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from './hooks/useFirebase';
import useAuth from './hooks/useAuth';
import background from '../Images/Untitled.png';

const Login = () => {
    const { signInUsingGoogle,handleRegistration, handleEmailChange, handlePasswordChange, toggleLogin, isLogin, error} = useAuth();
    return (
        <div className="text-white p-5" style={{background: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize:"100%" , height:"100%"}}>



            <form onSubmit={handleRegistration}>
        <h1 className="text-warning p-5 ">Please {isLogin ? 'Login' : 'Register'}</h1>
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


            <button className="btn btn-info my-5" onClick={signInUsingGoogle}>Sign in with google</button>
            
        </div>
    );
};

export default Login;