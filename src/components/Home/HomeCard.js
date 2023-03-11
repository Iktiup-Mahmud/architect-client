import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const HomeCard = ({service}) => {
    const { _id, img, name, description, price } = service;

    return (
        <div>
                <div className="card bg-base-200 border-r-2 border-b-2 rounded-lg  shadow-xl">
                <PhotoProvider>
                    <PhotoView key={_id} src={img}>
                        <figure><img src={img} alt="" style={{ objectFit: 'cover' }} /></figure>
                    </PhotoView>
                </PhotoProvider>


                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className='text-start'>{
                            description.length > 100 ?
                                description.slice(0, 100) + '.....' :
                                description
                        }</p>
                        <div className="card-actions justify-end">
                            <p className='text-start items-center text-success font-bold my-auto'>Price: {price}$</p>
                            <Link to={`/services/${_id}`} className="btn btn-primary">Check Details</Link>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default HomeCard;