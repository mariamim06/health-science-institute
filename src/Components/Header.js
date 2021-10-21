import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import useFirebase from './hooks/useFirebase';

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <div className="header">
            
<nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
<h3 className="font-weight-bold text-secondary p-5">INSTITUTE OF HEALTH SCIENCE</h3>
<Link className="navbar-brand" to="/Home">Home</Link>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">

  <ul className="navbar-nav mr-auto">
    
    <li className="nav-item active">
      <Link className="nav-link" to="/login">Login/Register</Link>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to="/about">About</Link>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to="/details">Courses</Link>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to="/news">News</Link>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to="/review">Reviews</Link>
    </li>
    
    
    
  </ul>


  <div className="form-inline my-2 my-lg-0">
  <h6 className="mr-sm-2">{user.displayName} <br/> {user.email}</h6>
   
    {user?.email && <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={logout}>Log Out</button>}
  </div>
</div> 
</nav>










        </div>














    );
};

export default Header;