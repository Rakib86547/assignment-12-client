import React from 'react';
import { Link } from 'react-router-dom';

const UserMenu = () => {
    return (
        <div>
            
            <li><Link to='/dashboard/my_orders'>My Orders</Link></li>
        </div>
    );
};

export default UserMenu;