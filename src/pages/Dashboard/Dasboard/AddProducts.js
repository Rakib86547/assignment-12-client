import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const {register, handleSubmit} = useForm();

    const handleAddProduct = data => {
        // data.preventDefault();
        console.log(data)
    }
    return (
        <div>
            <h1 className='text-center text-3xl text-secondary'>Add A Products</h1>
            <div className="hero bg-white my-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full shadow-2xl">
                        <form onSubmit={handleSubmit(handleAddProduct)} className="card-body w-[450px] text-secondary">
                            <div className="form-control">
                                <label className="label">
                                    <span className="font-semibold">Product Name</span>
                                </label>
                                <input 
                                {...register("name")}
                                type="text" 
                                placeholder="your products name" 
                                className="input input-bordered text-secondary border-primary" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="font-semibold">Price</span>
                                </label>
                                <input 
                                {...register("price")}
                                type="text" 
                                placeholder="price" 
                                className="input input-bordered border-primary" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="font-semibold">Location</span>
                                </label>
                                <input 
                                {...register("location")}
                                type="text" 
                                placeholder="location" 
                                className="input input-bordered border-primary" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="font-semibold">Condition</span>
                                </label>
                                <select {...register("condition")} className="select select-bordered w-full border-primary">
                                    <option>Good</option>
                                    <option>Excellent</option>
                                    <option>fair</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="font-semibold">Mobile</span>
                                </label>
                                <input 
                                {...register("mobile")}
                                type="text" 
                                placeholder="mobile" 
                                className="input input-bordered border-primary" />
                            </div>

                            <textarea {...register("message")} className="textarea textarea-bordered border-primary" placeholder="Message"></textarea>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;