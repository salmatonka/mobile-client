import React from 'react';
import {useContext} from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import {useQuery} from '@tanstack/react-query';


const MyProduct = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/orderings?email=${user?.email}`;

    const { data: orderings = [] } = useQuery({
        queryKey: ['orderings', user?.email],
        queryFn: async() =>{
          const res = await fetch(url);
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
        <th>Name</th>
        <th>phoneServices</th>
        <th>original_price</th>
        <th>resale_price</th>
        <th>phoneServices</th>
        <th>original_price</th>
        <th>phone</th>
        <th>Location</th>
        <th>purchase_year</th>
        <th>message</th>
        
      </tr>
    </thead>
    <tbody>
     
      {orderings.map((ordering, i) => <tr>
         <th>{i}</th>
         <th></th>
         <th></th>
         <th></th>
         <th></th>
         <th></th>
         <th></th>
         <th></th>
         <th></th>
         <th></th>

      </tr>)
      }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyProduct;