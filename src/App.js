// import React, {useState } from 'react';
// import { Component } from 'react';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';

import News from './Components/News';
import About from './Components/About';
import ServiceDetails from './Components/ServiceDetails';
import Footer from './Components/Footer';


import './App.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound';
import Review from './Components/Review';

// import initializeAuthentication from './Firebase/firebase.initialize';
// import background from './Untitled.png';


function App() {
  return (
    <div className="App">
        <AuthProvider>
        <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/news">
              <News></News>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/details">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
