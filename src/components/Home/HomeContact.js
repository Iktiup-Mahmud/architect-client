import React from 'react';

const HomeContact = () => {
    return (
        <div className="hero bg-base-300">
            <div className="hero-content flex-col lg:gap-12 lg:flex-row my-10">
                <div className='w-1/2 m-0 p-0'>
                    <img src="https://specials-images.forbesimg.com/imageserve/5f1fd679c4049d7bec674c92/0x0.gif?fit=scale"
                        className=" rounded-lg shadow-2xl" alt='' />
                </div>
                <section className='text-center lg:py-16 lg:my-20 mx-10'>
                    <div className="badge badge-success mb-3">Contact</div>
                    <h4 className='text-primary font-bold text-3xl'>CONTACT US</h4>
                    <h2 className='text-4xl mb-10 '>Stay Connected with us</h2>
                    <div className='items-center'>
                        <input type="email" placeholder="Email Address" className="input w-full mx-auto mt-3 block" required />
                        <input type="text" placeholder="Subject" className="input w-full mx-auto mt-3 block " />
                        <textarea className="textarea my-3 h-28 w-full block mx-auto" placeholder="Your Message" required></textarea>
                        <button className='btn btn-warning'>Submit</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomeContact;