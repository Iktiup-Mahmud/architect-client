import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handelLogout = () => {
        logOut()
            .then(() => console.log('logout successfull'))
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/ami'>My Reviews</Link></li>
                        <li><Link to='/ami'>Add Services</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src="https://i.ibb.co/kVTXyyN/logo.jpg" className='w-12 mr-3' alt="" srcSet="" />
                    <h1> ARCHITECT</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                    {
                        user?.uid ? 
                        <>
                        <ul className="menu menu-horizontal p-0">
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/services'>Services</Link></li>
                                <li><Link to='/myreviews'>My Reviews</Link></li>
                                <li><Link to='/addservices'>Add Services</Link></li>
                        </ul>
                        </>
                        :
                        <>
                        <ul className="menu menu-horizontal p-0">
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/services'>Services</Link></li>
                        </ul></>
                    }
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?

                        <div className='flex'>
                            {
                                user?.photoURL ?
                                    <div className='mr-5 flex   ' >

                                        <img title={user?.displayName} alt='' style={{ height: '35px' }} className='my-auto mr-3 rounded-xl' src={user?.photoURL}></img>
                                    </div>
                                    :
                                    <div className='my-auto mr-3'>
                                        <FaUser className='text-2xl ' title={user?.displayName} />
                                    </div>
                            }
                            <Link onClick={handelLogout} className='btn btn-error'>Logout</Link>
                        </div>


                        :

                        <Link className='btn btn-primary' to='/login'>Login </Link>
                }
            </div>
        </div>
    );
};

export default Header;