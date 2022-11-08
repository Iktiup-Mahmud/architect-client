import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Service = () => {
    const { _id, name, img, description, price, rating } = useLoaderData();

    return (
        <div>
            <h1 className='my-10 font-bold text-3xl text-warning'>Service: {name}</h1>
            <div className="card w-1/2 mx-auto bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-warning">Service Name: {name}</h2>
                    <p className='font-bold text-left text-warning'>Description:</p>
                    <p>{description}</p>
                    <div className="card-actions flex justify-between mt-5">
                        <div className='text-start items-center text-warning font-bold my-auto'>
                            <h1>Price: {price} $</h1>
                            <h1>Rating: {rating}</h1>
                        </div>
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;