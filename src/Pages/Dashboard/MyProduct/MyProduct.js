import React from 'react';
import {useContext} from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import {useQuery} from '@tanstack/react-query';


const MyProduct = () => {
    const {user} = useContext(AuthContext);

    const url = `https://mobile-market-server-nu.vercel.app/orderings?email=${user?.email}`;

    const { data:orderings = [] } = useQuery({
        queryKey: ['orderings', user?.email],
        queryFn: async() =>{
            const res = await fetch(url,{
              headers: {
               authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            });
          const data = await res.json();
          return data;
        } 
         
      })

    return (
        <div>
            <h1 className='text-3xl'>My Product</h1>

            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>userName</th>
         <th>email</th>
         <th>brand_name</th>
         <th>original_price</th>
         <th>resale_price</th>
         <th>Location</th>
         <th>phone</th>
         <th>postedDate</th>
         <th>message</th>
        
      </tr>
    </thead>
    <tbody>
     
      {orderings?.length && orderings.map((ordering, i) => <tr key={ordering._id}>
         <th>{i+1}</th>
         
         <th>{ordering.userName}</th>
         <th>{ordering.email}</th>
         <th>{ordering.brand_name}</th>
         <th>{ordering.original_price}</th>
         <th>{ordering.resale_price}</th>
         <th>{ordering.Location}</th>
         <th>{ordering.phone}</th>
         <th>{ordering.purchase_year}</th>
         <th>{ordering.message}</th>

      </tr>)
      }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyProduct;