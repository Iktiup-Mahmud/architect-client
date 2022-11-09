import React from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyReviews = () => {
    return (
        <div className="overflow-x-auto w-4/5 mx-auto mb-20">
            <h1 className='text-warning text-5xl font-bold my-10'>My Reviews</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        
                        <th>Service Image</th>
                        <th>Service Name</th>
                        <th>Review</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://i.pinimg.com/736x/37/5a/d3/375ad3e79624f45085d2d76e8bb8ba16--tom-cruise-profile-pictures.jpg" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                        </td>
                        <td>
                            <th className='overflow'>
                                <button className="btn btn-ghost dropdown btn-xs ">
                                    <FaAlignJustify />
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><Link to='/home'>Edit</Link></li>
                                        <li className='text-error'><Link to='/services'>Delete</Link></li>
                                    </ul>
                                </button>
                            </th>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;