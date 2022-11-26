import React from 'react';
import { Link } from 'react-router-dom';

const SellerMenu = () => {
    return (
        <div>
            <li><Link to='/dashboard/add_products'>Add A Products</Link></li>
            <li><Link to='/dashboard/my_products'>My Products</Link></li>
        </div>
    );
};

export default SellerMenu;