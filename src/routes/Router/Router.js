import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Jeeps from "../../pages/Home/CategoriesDetails/Jeeps";
import Home from "../../pages/Home/Home/Home";

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
            element: <Jeeps />,
            loader: ({params}) => fetch(`http://localhost:5000/jeeps/${params.id}`)
        },
    ]
}]);

export default router;