import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
const CategoryModal = ({phoneServices,setPhoneServices}) => {
    const {_id,brand_name,original_price,resale_price,Location,postedDate}= phoneServices;
    const {user} = useContext(AuthContext);

    const handleOrderSubmit= event =>{

      event.preventDefault();

          const form = event.target;
		    const name = form.name.value;
		    const email = form.email.value;
		    const phone = form.phone.value;
          const message = form.message.value;
         
		  
		
        const ordering = {

         phoneServices:_id,
         userName:name ,
         email,
         brand_name,
         original_price,
         resale_price,
         Location,
         phone,
         purchase_year:postedDate,
         message,
         
        } 
       
      //   orderings
       
      fetch('https://mobile-market-server-nu.vercel.app/orderings',{
		method: "POST",
		headers: {
			"content-type" : "application/json",
			// authorization: `Bearer ${localStorage.getItem ('token')}`
		},
		body : JSON.stringify(ordering)
	   })
	   .then(res=> res.json())
	   .then(data=>{
		console.log(data)
	  if(data.acknowledged){

        toast.success("ordering successfully...")
        setPhoneServices(null);
		  
	  }

   })
	  
   .catch((error) => {
      toast.error(error.message)

    })
}

    return (
        <div>

<input type="checkbox" id="phone-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="phone-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
     
        <form onSubmit={handleOrderSubmit} novalidate="" action="" className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid ">
				
     <div className="form-control w-full max-w-xs">
       <label className="label">
      <span className="label-text">Brand_name</span></label>
      <input name='brand_name' type="name" placeholder={brand_name} 
       className="input input-bordered w-full max-w-xs" required/>
    </div>

     <div className="form-control w-full max-w-xs">
        <label className="label">
       <span className="label-text">Original_price</span></label>
       <input name='price' type="price" placeholder={original_price} 
        className="input input-bordered w-full max-w-xs"  />
     </div> 
     <div className="form-control w-full max-w-xs">
        <label className="label">
       <span className="label-text">Resale_price</span></label>
       <input name='price' type="text" placeholder={resale_price} 
        className="input input-bordered w-full max-w-xs"  required/>
     </div> 

     <div className="form-control w-full max-w-xs">
        <label className="label">
       <span className="label-text">Location</span></label>
       <input name='location' type="text" placeholder={Location} 
       className="input input-bordered w-full max-w-xs" readOnly/>
    </div> 
     <div className="form-control w-full max-w-xs">
        <label className="label">
       <span className="label-text">Purchase Year</span></label>
       <input name='year' type="text" placeholder={postedDate} 
       className="input input-bordered w-full max-w-xs" required/>
    </div> 

    {/* <select name='options' className="select select-bordered w-full max-w-xs">
      <option disabled >Condition Type</option>
      <option>Excellent</option>
       <option>Good</option>
       <option>Fair</option>
   </select> */}
     
    <div className="form-control w-full max-w-xs">
       <label className="label">
      <span className="label-text">User Name</span></label>
      <input name="name" type="text" placeholder="your name"
       defaultValue={user?.displayName} 
        className="input input-bordered w-full max-w-xs" readOnly/>
    </div>
    <div className="form-control w-full max-w-xs">
       <label className="label">
      <span className="label-text">Email Address</span></label>
      <input name="email" type="email" placeholder="your email"
       defaultValue={user?.email} 
        className="input input-bordered w-full max-w-xs" readOnly />
    </div>

       <div className="form-control w-full max-w-xs pb-5">
             <label className="label">
            <span className="label-text">Phone Number</span></label>
          <input name='phone' type="text" placeholder="your number" className="input input-bordered w-full max-w-xs" required/>
       </div>

       <div className="form-control">
    <label className="label">
    <span className="label-text">Description</span></label> 
    <textarea name='message' className="textarea textarea-bordered h-24"    placeholder="" required></textarea></div>

       <input type="submit"className=" input input-bordered w-full max-w-xs bg-violet-400 dark:text-gray-900" value="Submit"/>

			 </form>

         </div>
       </div> 
        </div>
    );
};

export default CategoryModal;