import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/seller_bookings?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
    
    return (
        <div>
            <h1 className='text-center text-3xl text-secondary'>My Products</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full text-center text-secondary">
                    <thead>
                        <tr className='text-white'>
                            
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        products.map((product, i) => <tbody key={product._id}>
                            <tr className='border'>
                                
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 border-primary border-2 rounded-full">
                                            <img src={product.product_image} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{product.productsName}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className='btn btn-xs btn-warning'>Unsold</button>
                                </td>
                                <td>
                                    <button className='btn btn-xs btn-primary'>Delete</button>
                                </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyProducts;