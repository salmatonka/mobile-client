import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";

import Category from "../../Pages/Category/Category/Category";
import CategoryDetails from "../../Pages/Category/CategoryDetails/CategoryDetails";

import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";

import Home from "../../Pages/Home/Home/Home";
import Advertised from "../../Pages/Advertised/Advertised/Advertised";
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
                path:'/category',
                element:<Category></Category>,
                  
            },
           
            {
                path:'/categoryDetails/:id',
                element:<CategoryDetails></CategoryDetails>,
                loader:({params})=>
                fetch(`http://localhost:5000/services/${params.id}`),
                
                  
            },
            {
                path:'/advertised',
                element: <Advertised></Advertised>,
                  
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>,
                  
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
    },
    {
        path:'/dashboard',
        element: 
            //    <PrivateRoute>
               <DashboardLayout></DashboardLayout>,
        //  </PrivateRoute> 
            
            children:[
                {
                    path:'/dashboard',
                    element:<MyProduct></MyProduct>,  
                },
                {
                    path:'/dashboard/allusers',
                    element:<AllUsers></AllUsers>,  
                },
            ]
    }
       
])
export default router;