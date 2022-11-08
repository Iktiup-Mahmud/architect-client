import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const { _id, name, description, img, price, rating } = service

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-start'>{
                        description.length > 100 ?
                            description.slice(0, 100) + '.....' :
                            description
                    }</p>
                    <div className="card-actions justify-end">
                        <p className='text-start items-center text-warning font-bold my-auto'>Price: {price}$</p>
                        <Link to={`/services/${_id}`} className="btn btn-primary">Check Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;