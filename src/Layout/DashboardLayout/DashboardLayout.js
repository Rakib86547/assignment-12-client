import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Navbar from '../../pages/Share/Navbar/Navbar';
import AdminMenu from './adminMenu';
import SellerMenu from './sellerMenu';
import UserMenu from './useMenu';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const { data: role } = useQuery({
        queryKey: ['role'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user/${user?.email}`)
            const data = await res.json()
            return data.role
        }
    })
 
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="car-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ml-5">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-gray-200 text-secondary">
                    <label htmlFor="car-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-75 font-semibold">
                        {
                            role && role !== 'user' ? <>
                                {
                                    role === 'admin' ? <AdminMenu /> : <UserMenu />
                                }
                            </> : <SellerMenu />
                        }
                       
                    </ul>
                </div>
            </div >
        </div >
    );
};

export default DashboardLayout;