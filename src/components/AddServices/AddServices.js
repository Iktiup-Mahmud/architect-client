import React from 'react';
import toast from 'react-hot-toast';
import { Form } from 'react-router-dom';

const AddServices = () => {

    const handelSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.sName.value;
        const img = form.img.value;
        const price = form.price.value || 0;
        const time = form.time.value || '1 day';
        const rating = form.rating.value || '4.5/5';
        const description = form.description.value;

        const serviceInfo = {
            name,
            img,
            price,
            time,
            rating,
            description
        }

        console.log(serviceInfo)

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceInfo)
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
            <div className="card w-2/3 mx-auto bg-base-100 shadow-xl mt-16 mb-20">
                <h1 className='font-bold text-primary text-5xl mt-10 mb-5'>Add Service</h1>
                <Form onSubmit={handelSubmit} className=" text-center w-2/3 card-body mx-auto">
                    <input type="text" name='sName' placeholder="Service name" className="input input-bordered input-ghost" required />
                    <input type="text" name='img' placeholder="Image URL" className="input input-bordered input-ghost " required />
                    <input type="text" name='price' placeholder="Price" className="input input-bordered input-ghost" required />
                    <input type="text" name='time' placeholder="Time" className="input input-bordered input-ghost" />
                    <input type="text" name='rating' placeholder="Rating" className="input input-bordered input-ghost" />
                    <textarea name='description' className="textarea h-32 textarea-ghost border-x-lime-50" placeholder="Details" required></textarea>
                    <button className='btn btn-primary my-5'>Add Service</button>
                </Form>
            </div>
    );
};

export default AddServices;