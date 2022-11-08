import React, { useEffect, useState } from 'react';

const Comments = ({ id }) => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/comments/${id}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
                console.log(data)
            })
    }, [])

    return (
        <div className='mb-20'>
            <h1 className='mt-16 mb-10 text-3xl font-bold text-warning'>Reviews</h1>
            <div className="card w-1/2 mx-auto text-left bg-base-100 shadow-xl">
                {
                    review.map(commen => {
                        return (
                            <div className='p-5 border rounded-lg mb-5'>
                                <p className='font-bold'><span className='text-warning'>Name:</span> {commen.cusName}</p>
                                <p ><span className='text-warning font-bold'>Review:</span> {commen.comment}</p>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Comments;