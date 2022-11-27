import React, { useEffect, useState } from 'react';
import BrandCard from '../BrandCard/BrandCard';
import CategoryModal from '../CategoryModal/CategoryModal';
import {useQuery} from '@tanstack/react-query';

const CategoryDetails = () => {
    // const [services, setServices] = useState([]);
    const [phoneServices,setPhoneServices] = useState([]);

    const { data:services = [] } = useQuery({
      queryKey: ['services'],
      queryFn: async() =>{
        const res = await fetch('http://localhost:5000/services');
        const data = await res.json();
        return data;
      } 
       
    })
  
    // if (isLoading) return 'Loading...'
  
    // if (error) return 'An error has occurred: ' + error.message
  
   
  

    // useEffect(() =>{
    //     fetch('http://localhost:5000/services')
    //     .then(res =>res.json())
    //     .then(data => setServices(data))
    //   },[])
    
    return (

      <div className='bg-violet-200 py-10'>
            <h1 className='text-3xl font-semibold text-center py-10'>Mobile Phone Brand: {services.length}
                </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10'>
        
            {
              services.map(service=><BrandCard
              key={service.id}
              service={service}
              setPhoneServices={setPhoneServices}
              ></BrandCard>)  
            }
            </div>
            
            <CategoryModal
              phoneServices={phoneServices}
              ></CategoryModal>
            
          </div>
    );
};

export default CategoryDetails;