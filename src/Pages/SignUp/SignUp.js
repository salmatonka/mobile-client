import React from 'react';
import {useState,useContext} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import {toast} from 'react-toastify';
import { useForm } from 'react-hook-form';

const SignUp = () => {
	  

	const {register,handleSubmit,formState: { errors }} = useForm();
     
    const {createUser,updateUser} = useContext(AuthContext);
	const [signUpError,setSignUpError] = useState('')
        const navigate = useNavigate;
         const handleSignUp = (data) =>{
           console.log(data);
           setSignUpError('');

       createUser(data.email, data.password)
       .then(result =>{ 
           const user =result.user;
           console.log(user);
		   toast.success('user creates success')
		    const userInfo ={
		   		displayName: data.name
		   	  }
		    updateUser(userInfo)
		   	 .then(()=>{
		   		navigate('/');
		   	 })
	   
		   	  }).catch((error) => {
		       toast.error(error.message)
	   
		     })
	   
		.catch(error =>{
			console.log(error)
			setSignUpError(error.message)
		})

}


	

    return (
		<div className='h-[800px] flex justify-center items-center'>
		<div className='w-96 p-7'>
		  <h2 className='text-3xl text-center font-bold'>SignUp</h2>
		  <form onSubmit={handleSubmit(handleSignUp)}>
	
	<div className="form-control w-full max-w-xs">
		<label className="label"> <span className="label-text">Name
		 <input type="text" 
		  {...register("name")}
		 className="input input-bordered w-full max-w-xs" /></span>
	   </label>
	   
	</div>
	<div className="form-control w-full max-w-xs">
		<label className="label"> <span className="label-text">Email
		 <input type="email" 
		  {...register("email",{ required: "Email Address is required" })}
		 className="input input-bordered w-full max-w-xs" /></span>
	   </label>
	   {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
	</div>
  
  <div className="form-control w-full max-w-xs">
		<label className="label"><span className="label-text">Password
		<input type="password" 
		{...register("password",{ required: "password is required",
		
	  })}

	   className="input input-bordered w-full max-w-xs" /></span></label>
	   {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

		<label className="label"><span className="label-text">forget password</span></label>
  
  </div>
  <input type="submit" value='Sign Up' className="mt-4 text-white btn btn-accent w-full max-w-xs" />
  {signUpError && <p className='text-red-600'>{signUpError}</p>}
  </form>

  <p>Already have a account <Link className='text-primary'  to='/login'>please login</Link> </p>
  <div className="divider">OR</div>     
	
  <button className=" btn btn-output text-white w-full max-w-xs">
	Continue with google
  </button>

  </div> 
  </div> 
    );
};

export default SignUp;