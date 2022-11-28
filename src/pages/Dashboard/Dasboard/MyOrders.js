import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { Link } from 'react-router-dom';


const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: orders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    return (
        <div>
            <h1 className='text-3xl font-semibold text-secondary'>My Orders: {orders.length}</h1>


            <div className="overflow-x-auto">
                <table className="table table-zebra w-full text-center text-secondary">
                    <thead>
                        <tr className='text-white'>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    {
                        orders.map((order, i) => <tbody key={i}>
                            <tr className='border'>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 border-primary border-2 rounded-full">
                                            <img src={order.image} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{order.itemName}</td>
                                <td>{order.price}</td>
                                <td>
                                    {<Link to={`/dashboard/payment/${order._id}`}>
                                        <button
                                            className='btn btn-xs btn-primary'>Pay</button>
                                    </Link>}
                                    {
                                        order.price && order.paid && <p className='text-green-500'>
                                            paid
                                        </p>
                                    }
                                </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>

        </div>
    );
};

export default MyOrders;