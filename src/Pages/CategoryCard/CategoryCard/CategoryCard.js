import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const CategoryCard = ({service}) => {
    const {_id,brand_name,img} = service;
    
    return (
        <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-violet-400" />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">{brand_name}</h2>
               
            </div>
            <Link to={`/categoryDetails/${_id}`}><button type="button"
             className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 dark:text-gray-900">Details</button></Link>
            

            <label
            htmlFor="my-modal-3" className="flex items-center justify-center p-3 font-semibold tracking-wide rounded-md bg-violet-400 dark:text-gray-900">Book Now</label>

            <Link to='/'><button type="button"
             className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 dark:text-gray-900">Report</button></Link>

        </div>
    </div>
)};

export default CategoryCard;