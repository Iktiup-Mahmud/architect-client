import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Reviewrow from './Reviewrow';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`https://server-side-orpin.vercel.app/reviewsbyuser?displayName=${user?.displayName}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setReviews(data)
            })
    }, [user?.displayName, reviews ])

    const handelDelete = id => {
        const proceed = window.confirm('Are you sure to delete this?')
        if (proceed) {
            fetch(`https://server-side-orpin.vercel.app/reviewsbyuser/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json)
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('daleted successfull')
                        const remaining = reviews.filter(rv => rv._id !== id)
                        setReviews(remaining)
                    }
                })
        }
    }

    return (
        <div className="overflow-x-auto w-4/5 mx-auto mb-20  min-h-screen">
            <Helmet>
                <title>My Review</title>
            </Helmet>
            {
                // console.log(user.email)
            }
            {
                // console.log(user.displayName)
            }
            <h1 className='text-warning text-5xl font-bold my-10'>My Reviews</h1>
            <h1 className='font bold text-xl mb-3'>You have {reviews.length} reviews.</h1>
            <table className="table w-full">
                <thead>
                    <tr>

                        <th>Action</th>
                        <th>Service Name</th>
                        <th>Your Review</th>

                    </tr>
                </thead>

                <tbody>
                    {
                        reviews.map(review => <Reviewrow key={review._id} review={review} handelDelete={handelDelete}></Reviewrow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;