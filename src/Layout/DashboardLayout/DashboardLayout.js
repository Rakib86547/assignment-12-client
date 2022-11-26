import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../pages/Share/Navbar/Navbar';

const DashboardLayout = () => {
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
                        <li><Link to='/dashboard'>My Orders</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;