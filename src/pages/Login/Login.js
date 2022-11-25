import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken/useToken';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const {signIn, signInWithGoogle, signInWithGithub} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [userCreateEmail, setUserCreateEmail] = useState('');
    const [token] = useToken(userCreateEmail);
    if(token) {
        navigate('/');
    }
    const handleLogin = data => {
        const email = data.email;
        const password = data.password;
        setLoginError('');
        signIn(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user)
            setUserCreateEmail(email)
        })
        .catch(error => {
            setLoginError(error.message);
        })
    };

    const handleGoogleSignIn = (Provider) => {
        signInWithGoogle(googleProvider)
        .then(() => {
            navigate(from, {replace: true});
        })
        .catch(error => {
            setLoginError(error.message);
        })
    };
    const handleGithubSignIn = (Provider) => {
        signInWithGithub(githubProvider)
        .then(() => {
            navigate(from, {replace: true})
        })
        .catch(error => {
            setLoginError(error.message)
        })
    }
    return (
        <div className="hero mt-14">
            <div className="hero-content w-[500px] flex-col ">
                <div className="card flex-shrink-0 w-full shadow-2xl">
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body w-full">
                        <h1 className="text-3xl text-center font-bold text-secondary">Login</h1>

                        <div className="form-control">
                            <label className="">
                                <span className="label-text text-secondary font-semibold">Email</span>
                            </label>
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="email"
                                className="input input-bordered border-primary text-secondary" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-secondary font-semibold">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: true
                                })}
                                type="password"
                                placeholder="password"
                                className="input input-bordered border-primary text-secondary" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">Login</button>
                        </div>
                        <div className="divider border-secondary text-secondary">Or Login With</div>
                    </form>
                    <div className='w-[80px] mx-auto flex  justify-between -mt-4 pb-4'>
                        <button onClick={handleGoogleSignIn}><FaGoogle className='text-primary w-[25px] h-[25px]' /></button>
                        <button onClick={handleGithubSignIn}><FaGithub className='text-secondary w-[25px] h-[25px]' /></button>
                    </div>
                    <p className='text-center py-5 text-secondary'>Don`t have an account? <Link className='text-primary' to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;