import React from 'react';
import { Link } from 'react-router-dom';

const HeroHome = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2'>
                        <img src="https://placeimg.com/260/400/arch" alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">We had a great relations with our consumer!</h1>
                        <p className="py-6">We are highly commited to our customer to give them our best service. And our 95% of customer are happy with our service. So take a trip with GOTRIP.</p>
                        <Link className="btn btn-info">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroHome;