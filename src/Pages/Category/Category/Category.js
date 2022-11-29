import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import CategoryCard from '../../CategoryCard/CategoryCard/CategoryCard';
import CategoryModal from '../CategoryModal/CategoryModal';

//4card home
const Category = () => {
    const [services, setServices] = useState([]);
    
    
    useEffect(() =>{
      fetch('http://localhost:5000/services')
      .then(res =>res.json())
      .then(data => setServices(data))
    },[])
    return (
        <div className='bg-violet-200'>
            <h1 className='text-3xl font-semibold text-center py-10'>Mobile Phone Brand: {services.length}
                </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10'>
            {
                services.map(service => <CategoryCard
                    key={service.id}
                service={service}
               
                ></CategoryCard>)
            }
            </div>
         
            <CategoryModal></CategoryModal>
        </div>
    );
};

export default Category;