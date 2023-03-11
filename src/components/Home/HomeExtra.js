import React from 'react';
import { Link } from 'react-router-dom';

const HomeExtra = () => {
    return (
        <div className="bg-[#747373]">
            {/* [url('https://res.cloudinary.com/dpcbzfiye/image/upload/w_1080,c_fit,dpr_auto,f_auto,q_auto,fl_progressive/v1562185890/qelbh3azjqpvn3rcjnns.jpg')] */}

            {/* <div className="card w-1/2 glass mx-auto ">
            <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title text-warning">Architect</h2>
                <p className='font-bold text-xl'>Are you intersted about my services?</p>
                <div className="card-actions justify-end">
                    <Link to='/services' className="btn btn-primary">Check Services</Link>
                </div>
            </div>
        </div> */}
            <div className='mx-48 py-28'>
                <div>
                    <h1 className='text-5xl font-bold text-black rounded-2xl p-5'>Frequently Asked Question's</h1>
                </div>

                {/* 1 */}
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-2 mt-14">
                    <div className="collapse-title text-xl font-medium text-yellow-500">
                        What is the main motive of Architect?
                    </div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem sit necessitatibus earum quam iure provident animi numquam eaque? Aliquid sit veritatis itaque nisi corporis esse dolor obcaecati ea alias pariatur. Sed maxime vero architecto beatae labore facilis, quaerat esse ipsa quis facere tenetur explicabo temporibus velit incidunt fugit aspernatur a magnam voluptatem, assumenda fugiat quas eos illo fuga iure.</p>
                    </div>
                </div>

                {/* 2 */}
                <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-2">
                    <div className="collapse-title text-xl font-medium text-yellow-500">
                        What are your expectation from us?
                    </div>
                    <div className="collapse-content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quas aperiam voluptates ullam sunt facere officia, illum incidunt minus facilis molestias quaerat totam veniam sint cum unde autem reprehenderit veritatis error soluta provident perferendis aut! Modi aliquam distinctio necessitatibus, repellat molestiae eos aliquid dolor numquam recusandae exercitationem quos, quae autem quam, et voluptate quod repudiandae sapiente maxime consectetur ut at! Eius, fugit? Nesciunt dolore impedit provident corporis? Voluptas, quam suscipit!</p>
                    </div>
                </div>

                {/* 3 */}
                <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-2">
                    <div className="collapse-title text-xl font-medium text-yellow-500">
                         Why you should consider us?
                    </div>
                    <div className="collapse-content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quas aperiam voluptates ullam sunt facere officia, illum incidunt minus facilis molestias quaerat totam veniam sint cum unde autem reprehenderit veritatis error soluta provident perferendis aut! Modi aliquam distinctio necessitatibus, repellat molestiae eos aliquid dolor numquam recusandae exercitationem quos, quae autem quam, et voluptate quod repudiandae sapiente maxime consectetur ut at! Eius, fugit? Nesciunt dolore impedit provident corporis? Voluptas, quam suscipit!</p>
                    </div>
                </div>

                {/* 4 */}
                <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-2">
                    <div className="collapse-title text-xl font-medium text-yellow-500">
                        Fix a problem
                    </div>
                    <div className="collapse-content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quas aperiam voluptates ullam sunt facere officia, illum incidunt minus facilis molestias quaerat totam veniam sint cum unde autem reprehenderit veritatis error soluta provident perferendis aut! Modi aliquam distinctio necessitatibus, repellat molestiae eos aliquid dolor numquam recusandae exercitationem quos, quae autem quam, et voluptate quod repudiandae sapiente maxime consectetur ut at! Eius, fugit? Nesciunt dolore impedit provident corporis? Voluptas, quam suscipit!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeExtra;