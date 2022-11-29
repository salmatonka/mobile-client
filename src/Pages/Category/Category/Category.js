import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import CategoryCard from '../../CategoryCard/CategoryCard/CategoryCard';

const Category = () => {
    const [categories,setCategories] = useState([]);
    
    useEffect(() =>{
      fetch('https://mobile-market-server-nu.vercel.app/categorys')
      .then(res =>res.json())
      .then(data => setCategories(data))
    },[])
    return (
        <div className='bg-violet-200'>
            <h1 className='text-3xl font-semibold text-center py-10'>Mobile Phone Brand: {categories.length}
                </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10'>
            {
                categories.map(category => <CategoryCard
                    key={category.id}
                category={category}
                ></CategoryCard>)
            }
            </div>
        </div>
    );
};

export default Category;