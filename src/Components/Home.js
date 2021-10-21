import React, { useEffect, useState } from 'react';
import useAuth from './hooks/useAuth';
import background from '../Images/Untitled.png';
// import background from '../Images/health.jpg';
import { Link } from 'react-router-dom';
import Services from './Services/Services';
import './Home.css'


const Home = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    const {user} = useAuth();
    return (
        <section>
            <div className="" style={{background: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize:"100%"}}>
            <div className="banner-container p-5 mb-5">
            <div className=" p-5">
            <h1 className="text-white py-2">Skill Focused. </h1>
            <h1 className="text-white py-2"> Science Based. </h1>
            <h1 className="text-white py-2"> Supported Study.</h1>
            <h4 className="text-white py-3">Gain practical knowledge on nutrition and wellness from the experts</h4>
            <Link to="/login" className="bg-info p-2 rounded m-5 text-white text-bold ">Start Now</Link>
            
            </div>
            <img className="banner-img rounded p-5" src="/health.jpg"></img>
            </div>
            <div className="banner-container">
                <div className="bg-warning mx-2 p-4">
                    <h3>Learn</h3>
                    <p>Gain practical, balanced and fad-free knowledge. Gain practical, balanced and fad-free knowledge.</p>
                </div>
                <div className="bg-info mx-2 p-4">
                    <h3>Apply</h3>
                    <p>Apply what you've learned to your life simply and quickly using effective coaching tools and strategies</p>
                </div>
                <div className="bg-danger mx-2 p-4">
                    <h3>Grow</h3>
                    <p>Take-home tools and resources let you use what you've learned long after the course is finished</p>
                </div>
                <div className="bg-success mx-2 p-4">
                    <h3>Repeat</h3>
                    <p>Continuing building new knowledge and skills with IHS, a college you trust.</p>
                </div>
            </div>
        </div>





       <div className=" second-container m-5 ">
           <div className="p-5 mr-5">
               <h1 className="font-weight-light ">Our mission is to provide practical, innovative and evidence-based health and nutrition courses.</h1>
               <p>Choose from our range of part-time in class and online academically accredited health and nutrition courses based on the latest integrative healthcare models.</p>
           </div>
           <img className="second-img border rounded mt-5 ml-5" src="/science.jpg"></img>
       </div>





        <h1 className="text-center text-info my-5 pt-5">Our Courses</h1>
        
            <div className="service-container" >
            {
                services.map(service=> <Services service={service}></Services>)
            }
            </div>
        <div className="container-fluid text-center">
        <h1 className="text-center text-info my-5 pt-5">INFO EVENTS</h1>
        <hr />
        <p>Training is an investment in your future. As with any investment it is important to identify what you wish to gain and which course will be most suitable for your needs. We recommend you attend one of our regular open days or evenings (online or in person) to find out more about the course structure, content and career opportunities.</p>
        <h5>Online Information Webinar</h5>
        <h4>Wednesday 17th November</h4>
        <h5>1:00 pm (Irish / UK time)</h5>
        <button className="btn btn-info my-3">Register Now</button>
            
       </div>
        </section>
        
    );
};

export default Home;