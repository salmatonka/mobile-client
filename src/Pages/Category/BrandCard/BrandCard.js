import React from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const BrandCard = ({detail}) => {
    const {brand_name,categorys} = detail;
    return (
        
		<div>
			<h1>{categorys.length}</h1>
			{brand_name}
		</div>
            
			
	
		
    );
};

export default BrandCard;