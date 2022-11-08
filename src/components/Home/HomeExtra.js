import React from 'react';
import { Link } from 'react-router-dom';

const HomeExtra = () => {
    return (
            <div className="card w-1/2 glass mx-auto my-20">
                <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-warning">Architect</h2>
                    <p className='font-bold text-xl'>Are you intersted about my services?</p>
                    <div className="card-actions justify-end">
                        <Link to='/services' className="btn btn-primary">Check Services</Link>
                    </div>
                </div>
            </div>
    );
};

export default HomeExtra;