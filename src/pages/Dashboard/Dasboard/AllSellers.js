import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/all_sellers', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/all_sellers/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0) {
                refetch()
                toast.success('Deleting Success')
            }
        })
    }
    return (
        <div>
            <h1 className='text-center text-3xl text-secondary my-5 font-bold'>All <span className='text-primary'>Sellers</span></h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full text-center text-secondary">
                    <thead>
                        <tr className='text-white'>
                            
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                           
                        </tr>
                    </thead>
                    {
                        sellers?.map(seller => <tbody key={seller._id}>
                            <tr className='border'>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>
                                    <button className='btn btn-xs btn-success'>Verify</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(seller._id)} className='btn btn-xs btn-primary'>Delete</button>
                                </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllSellers;