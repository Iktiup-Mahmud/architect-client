import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeCard from './HomeCard';

const HomeMain = () => {

    const [ services, setServices ] = useState([])

    useEffect( () => {
        fetch('https://server-side-orpin.vercel.app/services3')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='my-16'>
                <h1 className='text-5xl font-bold'>My Services</h1>
            </div>
            <div className='grid grid-cols-1 px-20 gap-10 lg:grid-cols-3 md:grid-cols-2'>
                {
                    services.map(service => <HomeCard key={service._id} service={service}></HomeCard>)
                }
            </div>
            <div className='my-20'>
                <Link to='/services' className='btn btn-warning px-10'>See All</Link>
            </div>
        </div>
    );
};

export default HomeMain;