import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');

    const handleSignUp = data => {
        
        const image = data.image[0];
        const formData = new FormData()
        formData.append('image', image)
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_KE}`, {
            method: 'POST',
            body: formData
        })
       .then(res => res.json())
       .then(data => {
        if(data.success === true) {
            console.log(data.data.url)
        }
        
       })
        .catch(error => {
            setSignUpError(error.message)
        })
    }
    return (
        <div className="hero mt-14">
            <div className="hero-content w-[500px] flex-col ">
                <div className="card flex-shrink-0 w-full shadow-2xl">
                    <form onSubmit={handleSubmit(handleSignUp)} className="card-body w-full">
                        <h1 className="text-3xl text-center font-bold text-secondary">Create Account</h1>

                        <div className="form-control">
                            <label className="">
                                <span className="label-text text-secondary font-semibold">Name</span>
                            </label>
                            <input
                                {...register("name")}
                                type="text"
                                placeholder="name"
                                className="input input-bordered border-primary text-secondary" />
                        </div>

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
                                <span className="label-text text-secondary font-semibold">Create as a</span>
                            </label>
                            <select {...register("options")} className="select text-secondary select-bordered w-full border-primary">
                                <option defaultValue="User" value="User">User</option>
                                <option>Seller</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-secondary font-semibold">Chose an Image</span>
                            </label>
                            <input
                                {...register("image", {
                                    required: true
                                })}
                                type="file"
                                placeholder="image"
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
                            <button className="btn btn-primary text-white">Sign Up</button>
                        </div>
                        <div className="divider border-secondary text-secondary">Or Login With</div>
                    </form>
                    <div className='w-[80px] mx-auto flex  justify-between -mt-4 pb-4'>
                        <button><FaGoogle className='text-primary w-[25px] h-[25px]' /></button>
                        <button><FaGithub className='text-secondary w-[25px] h-[25px]' /></button>
                    </div>
                    <p className='text-center py-5 text-secondary'>Already have an account? <Link className='text-primary' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;