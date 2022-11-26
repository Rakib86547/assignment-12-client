import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <div>
            <li><Link to='/dashboard/all_sellers'>All Sellers</Link></li>
            <li><Link to='/dashboard/all_buyers'>All Buyers</Link></li>
        </div>
    );
};

export default AdminMenu;