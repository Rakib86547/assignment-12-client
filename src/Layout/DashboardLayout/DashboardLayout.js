import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Navbar from '../../pages/Share/Navbar/Navbar';
import AdminMenu from './adminMenu';
import SellerMenu from './sellerMenu';
import UserMenu from './useMenu';

const DashboardLayout = () => {
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(false);

    const { user } = useContext(AuthContext);


    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setRole(data.role);
                setLoading(false)
                console.log(data.role)
            })
    }, [user])
    console.log(role);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="car-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ml-5">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side text-secondary">
                    <label htmlFor="car-drawer" className="drawer-overlay"></label>
                    <ul className="menu  p-4 bg-gray-200 w-75 sm:w-36 font-semibold">
                              {
                                loading ? ' ' : <>
                                
                                {
                                        role && role !== 'User' ? <>
                                            {
                                                role === 'admin' ? <AdminMenu /> : <SellerMenu />
                                            }
                                        </> : <UserMenu />
                                    } 
                                </>
                              }
                                                                                      
                    </ul>
                </div>
            </div >
        </div >
    );
};

export default DashboardLayout;