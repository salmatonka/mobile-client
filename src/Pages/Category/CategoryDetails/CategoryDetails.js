import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CategoryModal from '../CategoryModal/CategoryModal';

const CategoryDetails = () => {
  const servicePagesAll = useLoaderData();
	const {brand_name,img,original_price,resale_price,yearUsed,postedDate,Location,seller} = servicePagesAll;


    return (

      <div className='bg-violet-200 py-10'>
            <h1 className='text-3xl font-semibold text-center py-10'>Mobile Phone Brand</h1>
          <>
          <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<Link rel="noopener noreferrer" to="/" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
			<img src={img} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{brand_name}</h3>
			
		<p className="text-sm dark:text-gray-400">original_price: {original_price}</p>
		<p className="text-sm dark:text-gray-400">resale_price: {resale_price}</p>
		<p className="text-sm dark:text-gray-400">postedDate: {postedDate}</p>
		<p className="text-sm dark:text-gray-400">Location: {Location}</p>
		<p className="text-sm dark:text-gray-400">seller: {seller}</p>
		<p className="text-sm dark:text-gray-400">Used: {yearUsed}year</p>
     
    {/* <Link to='/categoryModal'> <label  htmlFor="phone-modal" className="btn flex items-center justify-center w-80 p-3 font-semibold tracking-wide rounded-md bg-violet-600 dark:text-gray-900">Book Now</label></Link>
     */}
	
    
    {/* <input type="text" value='Report' className="mt-4 text-white btn bg-violet-600 w-full max-w-xs" /> */}
			</div> 
		</Link>
		
		
	</div>
</section>
          </>
            
        </div>
    );
};

export default CategoryDetails;