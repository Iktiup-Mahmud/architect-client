import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [ services, setServices ] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    })
    return (
        <div className='my-16'>
            <Helmet>
                <title>
                    Services
                </title>
            </Helmet>
            <h1 className='font-bold text-5xl mb-14 text-primary'>My Services</h1>
            <div className='grid grid-cols-1 px-20 gap-10 lg:grid-cols-3 md:grid-cols-2'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;