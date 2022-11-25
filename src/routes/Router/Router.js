import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Jeeps from "../../pages/Home/CategoriesDetails/Jeeps";
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
            path: '/category/:id',
            element: <PrivetRoute><Jeeps /></PrivetRoute>,
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
    ]
}]);

export default router;