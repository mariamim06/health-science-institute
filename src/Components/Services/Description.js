import React from 'react';

const Description = (props) => {
    const {name, img, longDescription} = props.service;
    console.log(props.service)
    return(

        <div className="services m-5 p-3 w-75" style={{maxwidth: "200px", height:"", backgroundColor: "lightcyan", textAlign: "center"}}>
      
        <h3 className="text-secondary my-3">{name} </h3>
        <img className="rounded my-3" src={img} alt="" />
        <p className="">{longDescription} </p>
        <button className="btn btn-secondary">Start Course</button>
        
         
</div>
        );
    };
    
    export default Description;