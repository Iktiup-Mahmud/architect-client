import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/TmBZDkT/img-2.jpg" alt='' className="w-full brightness-50" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1/3 top-1/3  text-5xl text-slate-300 font-bold">
                        <h1>Hello, <br /> Wellcome to <span className='text-info'>GoTrip!</span></h1>
                    </div>
                    <div className="absolute flex justify-between left-1/2 top-1/2">
                        <Link to='/services' className='btn btn-info'>Get Start ❯</Link>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/ygfcP2G/img-1.jpg" alt='' className="w-full brightness-50" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1/3 top-1/3  text-5xl text-slate-300 font-bold">
                        <h1>Hello, <br /> Wellcome to <span className='text-info'>GoTrip!</span></h1>
                    </div>
                    <div className="absolute flex justify-between left-1/2 top-1/2">
                        <Link to='/services' className='btn btn-info'>Get Start ❯</Link>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;