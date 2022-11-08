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
                        <h1 className="text-5xl font-bold">I had a great relations with our consumers!</h1>
                        <p className="py-6">I am highly commited to our customer to give them our best service. And my 95% of customer are happy with my service. So take a trip with Architect.</p>
                        <Link className="btn btn-info">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroHome;