import React, { useEffect, useState } from 'react';
import BrandCard from '../BrandCard/BrandCard';
import Details from '../Details/Details';

const CategoryDetails = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/brands')
        .then(res =>res.json())
        .then(data => setBrands(data))
      },[])
    
    return (

      <div className='bg-violet-200 py-10'>
            <h1 className='text-3xl font-semibold text-center py-10'>Mobile Phone Brand: {brands.length}
                </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10'>
        
            {
              brands.map(brand=><BrandCard
              key={brand.id}
              brand={brand}
              ></BrandCard>)  
            }
            </div>
            
        </div>
    );
};

export default CategoryDetails;