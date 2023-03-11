import React from 'react';
import { Link } from 'react-router-dom';

const HeroHome = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-300">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2 mr-10'>
                        <img src="https://images.adsttc.com/media/images/5b8d/e80e/f197/cc85/dc00/0113/original/GIF-01-.gif?1536026632" alt='' className="max rounded-lg shadow-2xl" />
                    </div>
                    <div className='lg:text-left'>
                        <div className="badge badge-primary mb-3">Customer Relation</div>
                        <h1 className="text-5xl font-bold">We had a great relation with our consumers!</h1>
                        <p className="py-6">We are highly commited to our customer to give them my best service. And our 95% of customer are happy with my service. So take a trip with Architect.</p>
                        <Link to='/services' className="btn btn-success mr-5">Get Started</Link>
                        <Link to='/blog' className="btn btn-primary">Blogs</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroHome;