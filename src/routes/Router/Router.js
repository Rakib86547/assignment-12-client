import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import CarDetails from "../../pages/Cars/CategoriesDetails/CarDetails";
import Cars from "../../pages/Cars/CategoriesDetails/Cars";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/cars_details/:id',
            element: <Cars></Cars>,
            loader: ({params}) => fetch(`http://localhost:5000/all_categories/${params.id}`)
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
}]);

export default router;