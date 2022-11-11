import React, { useEffect, useState } from 'react';

const Comments = ({ id }) => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/comments/${id}`)
            .then(res => res.json())
            .then(data => {
                setReview(data.reverse())
                // console.log(data.reverse())
            })
    }, [id, review])
    

    return (
        <div className='mb-20'>
            <h1 className='mt-16 mb-10 text-3xl font-bold text-warning'>Reviews</h1>
            <div className="card w-1/2 mx-auto text-left bg-base-100 shadow-xl">
                {
                    review.length === 0 ?
                    <>
                        <h1 className='text-2xl text-center text-error font-bold'>No review found. Please add one.</h1>
                    </> :
                        review.map(cmnt => {
                            return (
                                <div key={cmnt?._id} className='p-5 border rounded-lg mb-5'>
                                    <div className='flex justify-between'>
                                        <p className='font-bold'><span className='text-warning'>Name:</span> {cmnt?.cusName}</p>
                                        <img src={cmnt?.image} className='rounded-full w-8' title={cmnt?.cusName} alt="" srcSet="" />
                                    </div>
                                    <p ><span className='text-warning font-bold'>Review:</span> {cmnt?.comment}</p>

                                </div>
                            )
                        })
                }
            </div>
        </div>
    );
};

export default Comments;