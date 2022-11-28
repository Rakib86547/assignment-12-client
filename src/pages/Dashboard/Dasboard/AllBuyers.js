import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://the-car-masters-server.vercel.app/all_buyers', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    const handleDelete = (id) => {
        fetch(`https://the-car-masters-server.vercel.app/all_buyers/${id}`, {
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
            <h1 className='text-center text-3xl text-secondary my-5 font-bold'>All <span className='text-primary'>Buyers</span></h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full text-center text-secondary">
                    <thead>
                        <tr className='text-white'>
                            
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                           
                        </tr>
                    </thead>
                    {
                        buyers.map(buyer => <tbody key={buyer._id}>
                            <tr className='border'>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>
                                    <button onClick={() => handleDelete(buyer._id)} className='btn btn-xs btn-primary'>Delete</button>
                                </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;