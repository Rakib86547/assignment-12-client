import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = data => {
        console.log(data)
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
                        <button><FaGoogle className='text-primary w-[25px] h-[25px]' /></button>
                        <button><FaGithub className='text-secondary w-[25px] h-[25px]' /></button>
                    </div>
                    <p className='text-center py-5 text-secondary'>Don`t have an account? <Link className='text-primary' to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;