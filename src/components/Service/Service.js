import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Form, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Comments from '../Comments/Comments';

const Service = () => {
    const { _id, name, img, description, price, rating } = useLoaderData();
    const { user } = useContext(AuthContext)

    const handelComment = e => {
        e.preventDefault()

        const form = e.target;
        const cusName = form.name.value;
        const email = form.email.value;
        const comment = form.comment.value;
        const image = user?.photoURL;

        const commentInfo = {
            service: _id,
            serviceName: name,
            cusName,
            email,
            comment,
            image
        }

        console.log(commentInfo)
        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(commentInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('Successfully added!')
            form.reset()
        })
        .catch(error => {
            console.error(error)
            toast.error("Can't added")
        })
    }



    return (
        <div>
            <h1 className='my-10 font-bold text-3xl text-warning'>Service: {name}</h1>
            <div className="card w-1/2 mx-auto bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-warning">Service Name: {name}</h2>
                    <p className='font-bold text-left text-warning'>Description:</p>
                    <p className='text-left'>{description}</p>
                    <div className="card-actions flex justify-between mt-5">
                        <div className='text-start items-center text-warning font-bold my-auto'>
                            <h1>Price: {price} $</h1>
                            <h1>Rating: {rating}</h1>
                        </div>
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <h1 className='text-4xl my-5 text-primary'>Reviews</h1>
                <div className=''>
                    <Form onSubmit={handelComment} className="card w-1/2 pt-10 py-5 bg-neutral text-neutral-content mx-auto">
                        <h1>Add Comments</h1>
                        <div className="card-body items-center text-center">
                            <input type="text" name='name' placeholder="Your name" defaultValue={user?.displayName} className="input input-bordered input-ghost w-1/2" required/>
                            <input type="email" name='email' placeholder="Your Email" defaultValue={user?.email} className="input input-bordered input-ghost w-1/2" required readOnly={user?.email ? true : false }/>
                            <textarea name='comment' className="textarea w-1/2 textarea-ghost border-x-lime-50" placeholder="Details" required></textarea>
                            {
                                user?.displayName ?
                                <></>
                                :
                                <p className='text-warning'>You need to login first for submiting a comment. </p>
                            }
                            <button className='btn btn-primary' 
                            disabled={ user?.displayName ? false : true }>Submit</button>
                        </div>
                    </Form>
                </div>
            </div>
            <div>
                <Comments key={_id} id={_id}></Comments>
            </div>
            
        </div>
    );
};

export default Service;