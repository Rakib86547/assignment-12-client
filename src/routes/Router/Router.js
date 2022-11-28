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
import Payment from "../../pages/Payment/Payment";
import Error from "../../pages/Share/Error/Error";
import SignUp from "../../pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
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
        // {
        //     path: '/dashboard',
        //     element: <MyOrders />
        // },
        {
            path: '/dashboard/my_orders',
            element: <PrivetRoute><MyOrders /></PrivetRoute>
        },
        
        {
            path: '/dashboard/add_products',
            element: <PrivetRoute><AddProducts /></PrivetRoute>
        },
        {
            path: '/dashboard/my_products',
            element: <PrivetRoute><MyProducts /></PrivetRoute>
        },
        {
            path: '/dashboard/all_sellers',
            element: <AdminRoute><AllSellers /></AdminRoute>
        },
        {
            path: '/dashboard/all_buyers',
            element:<AdminRoute> <AllBuyers /></AdminRoute>
        },
        {
            path: '/dashboard/payment/:id',
            element: <PrivetRoute><Payment /></PrivetRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/payment/${params.id}`)
        },
    ]
}

]);

export default router;