import React, { useEffect, useState } from 'react';
import BrandCard from '../BrandCard/BrandCard';
import Details from '../Details/Details';

const CategoryDetails = () => {
    const [categorys, setCategorys] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/details')
        .then(res =>res.json())
        .then(data => setCategorys(data))
      },[])
    
    return (
        <div>
            <h1>hhh{categorys.length}</h1>
            {
              categorys.map(detail=><BrandCard
              key={detail.id}
              detail={detail}
              ></BrandCard>)  
            }
            
        </div>
    );
};

export default CategoryDetails;