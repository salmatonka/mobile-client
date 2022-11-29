import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const {data:users = []} = useQuery({
        queryKey:['users'],
        queryFn: async() =>{
            const res = await fetch('https://mobile-market-server-nu.vercel.app/users');
            const data = await res.json();
            return data;

        }
    })
    return (
        <div>
            <h1 className='text-3xl'>All Users</h1>

            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      
     
      
      {
        users.map((user, i)=><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>Purple</td>
          </tr>)
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;