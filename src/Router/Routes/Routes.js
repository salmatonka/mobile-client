import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import Main from "../../pages/layout/Main";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import Blog from "../../Shares/Blog/Blog/Blog";
import ErrorPage from "../../Shares/ErrorPage/ErrorPage/ErrorPage";

const  router = createBrowserRouter([

     {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,  
            },
            {
                path:'/blog',
                element:<Blog></Blog>,  
            },
            {
                path:'/login',
                element:<Login></Login>,  
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>,  
            }
        ]
}
       
])


export default router;