import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Cars from "../../pages/Cars/CategoriesDetails/Cars";
import AddProducts from "../../pages/Dashboard/Dasboard/AddProducts";
import AllBuyers from "../../pages/Dashboard/Dasboard/AllBuyers";
import AllSellers from "../../pages/Dashboard/Dasboard/AllSellers";
import MyOrders from "../../pages/Dashboard/Dasboard/MyOrders";
import MyProducts from "../../pages/Dashboard/Dasboard/MyProducts";
import Welcome from "../../pages/Dashboard/Dasboard/Welcome";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Error from "../../pages/Share/Error/Error";
import SignUp from "../../pages/SignUp/SignUp";
import PrivetRoute from '../PrivetRoute/PrivetRoute'

const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/cars_details/:id',
            element: <PrivetRoute><Cars></Cars></PrivetRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/all_categories/${params.id}`)
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <SignUp />
        },
        {
            path: '/blog',
            element: <Blog />
        }
    ]
},
{
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
        {
            path: '/dashboard',
            element: <Welcome />
        },
        {
            path: '/dashboard/my_orders',
            element: <MyOrders />

        },
        
        {
            path: '/dashboard/add_products',
            element: <AddProducts />
        },
        {
            path: '/dashboard/my_products',
            element: <MyProducts />
        },
        {
            path: '/dashboard/all_sellers',
            element: <AllSellers />
        },
        {
            path: '/dashboard/all_buyers',
            element: <AllBuyers />
        },
    ]
}

]);

export default router;