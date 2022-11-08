import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Signup = () => {

    const [error, setError] = useState('');
    const { loginProvider, createUser, updateUserProfile } = useContext(AuthContext);
    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    const handelSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoUrl, email, password)

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                handelUpdateUser(name, photoUrl)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
    }

    const handelUpdateUser = (name, phUrl) => {
        const profile = {
            displayName: name,
            photoURL: phUrl
        }
        updateUserProfile(profile)
            .then(console.log('updated'))
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
        <Form onSubmit={handelSubmit} className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full ">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 py-20 px-8">
                    <h1 className="text-5xl font-bold text-primary">Register now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input name='photoUrl' type="text" placeholder="photo-url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
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
        </Form>
    );
};

export default Signup;