import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://architizer-prod.imgix.net/media/14962274016741210.jpg?fit=max&w=1140&q=60&auto=format&auto=compress&cs=strip&h=569" alt='' className="w-full brightness-50 h-[90vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1/3 top-1/3  text-5xl text-slate-300 font-bold">
                        <h1>Hello, <br /> Wellcome to <span className='text-green-600'>ARCHITECT!</span></h1>
                    </div>
                    <div className="absolute flex justify-between left-1/2  top-1/2">
                        <Link to='/services' className='btn btn-primary'>Get Start ❯</Link>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle glass bg-slate-400 text-black">❮</a>
                        <a href="#slide2" className="btn glass btn-circle bg-slate-400">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://holmesglen.edu.au/Holmesglen/media/ArticleImages/Building-Design-model.jpg" alt='' className="w-full h-[90vh] brightness-50" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1/3 top-1/3  text-5xl text-slate-300 font-bold">
                        <h1>Hello, <br /> Wellcome to <span className='text-green-600'>ARCHITECT!</span></h1>
                    </div>
                    <div className="absolute flex justify-between left-1/2 top-1/2">
                        <Link to='/services' className='btn btn-primary'>Get Start ❯</Link>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle glass bg-red-700">❮</a>
                        <a href="#slide1" className="btn btn-circle glass bg-slate-400">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;