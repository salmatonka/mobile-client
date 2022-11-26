import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import BrandCard from "../../Pages/Category/BrandCard/BrandCard";
import Category from "../../Pages/Category/Category/Category";
import CategoryDetails from "../../Pages/Category/CategoryDetails/CategoryDetails";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Blog from "../../shares/Blog/Blog/Blog";
import ErrorPage from "../../shares/ErrorPage/ErrorPage/ErrorPage";



const router = createBrowserRouter([

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
                path:'/home',
                element:<Home></Home>,  
            },
            {
                path:'/category/:id',
                element:<Category></Category>,  
            },
            {
                path:'/categoryDetails/:id',
                element:<CategoryDetails></CategoryDetails>,
                  
            },
            {
                path:'/brandCard',
                element:<BrandCard></BrandCard>,
                  
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
            },
           
        ]
}
       
])
export default router;