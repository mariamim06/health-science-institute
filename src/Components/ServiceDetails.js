import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Description from './Services/Description';

const ServiceDetails = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])



    return (
        <div>
          <h1 className="text-secondary font-weight-bold p-5 text-center">Courses Details</h1>
        <div className="container-fluid" >
            {
                services.map(service=> <Description service={service}></Description>)
            }
            </div>
        </div>
    );
};
export default ServiceDetails;