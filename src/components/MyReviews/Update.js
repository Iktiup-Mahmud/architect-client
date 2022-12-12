import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/myreviews'

    const handelEdit = (e) => {
        e.preventDefault();
        
        const review = e.target.review.value;
        console.log({review})

        
        fetch(`https://server-side-orpin.vercel.app/update/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({review})
        })
        .then(res => res.json())
        .then(data=>{
            if (data.modifiedCount > 0){
                toast.success('Review Updated!')
                navigate(from, { replace: true })
            }
            console.log(data)
            })
        .catch(err => console.error(err))
    }

    return (
        <div className='my-20'>
            <h1 className='my-10 text-4xl font-bold text-warning'>Update: {data.serviceName}</h1>
            <form onSubmit={handelEdit} >
                <textarea type="text" name='review' defaultValue={data?.comment} placeholder="Type here" className="textarea textarea-bordered w-1/2 h-20" />
                <br />
                <button type="submit" className='btn mt-5'>Update</button>
            </form>
        </div>
    );
};

export default Update;