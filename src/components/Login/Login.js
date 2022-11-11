import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const [error, setError] = useState('');
    const { login, loginProvider } = useContext(AuthContext);
    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handelSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        login(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
    }

    const handelGoogleLogin = () => {
        loginProvider(providerGoogle)
            .then(res => {
                const user = res.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
    }

    const handelGithubLogin = () => {
        loginProvider(providerGithub)
            .then(res => {
                const user = res.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
    }
    
    return (
        <form onSubmit={handelSubmit} className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero-content w-full ">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 p-20">
                    <h1 className="text-5xl font-bold text-primary">Login now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className='flex justify-center py-5 '>
                            <div onClick={handelGoogleLogin} className='mr-5 text-center'>
                                <h3 className='text-center ml-4'><FaGoogle /></h3>
                                <p>Google</p>
                            </div>
                            <div onClick={handelGithubLogin}>
                                <h3 className='text-center ml-4'><FaGithub /></h3>
                                <p>Github</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <p>Don't have an account? <Link className='text-primary' to='/regester'>Regester Here!</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;