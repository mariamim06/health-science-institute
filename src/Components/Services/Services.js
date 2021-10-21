import React from "react";
import { Link } from 'react-router-dom';




const Services = (props) => {
    const {name, img, shortDescription} = props.service;
    console.log(props.service)
return(
  <div className="services m-4 p-3 width-100%" style={{maxwidth: "200px", height:"", backgroundColor: "lightcyan", textAlign: "center"}}>
      
            <h3 className="text-secondary my-3">{name} </h3>
            <img className="rounded my-3" src={img} alt="" />
            <p className="">{shortDescription} </p>
            <Link to="/details" className="btn btn-info my-3">Know More</Link>
             
  </div>
)

};

export default Services;