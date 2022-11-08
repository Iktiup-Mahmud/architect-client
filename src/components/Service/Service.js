import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Service = () => {
    const { _id, name } = useLoaderData();

    return (
        <div>
            <h1>Service</h1>
            <h1>{_id}</h1>
            <h1>{name}</h1>
        </div>
    );
};

export default Service;