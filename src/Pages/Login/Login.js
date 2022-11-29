import React, { useState } from 'react';
import {useContext} from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import {toast} from 'react-toastify';
import { useForm } from 'react-hook-form';
import useToken from '../../hooks/useToken';
const Login = () => {
	const {register,handleSubmit, formState: { errors }} = useForm();
	const {signIn} = useContext(AuthContext);
	// const {login,signInWithGoogle} = useContext(AuthContext);
	const [loginError,setLoginError] = useState('');
	const [loginUserEmail,setLoginUserEmail] = useState('');
	// const [token] = useToken(loginUserEmail);

	const navigate = useNavigate();
	const location = useLocation();

	
	const from = location.state?.from?.pathname || '/'
    //   if(token){
	// 	navigate(from, { replace: true }) ;
	//   }
  
  
    const handleLogin= data =>{
      
      console.log(data);
	  setLoginError('');
          
	  signIn(data.email,data.password)
		   .then(result =>{
			const user = result.user;
			console.log(user);
			setLoginUserEmail(data.email);
			  
			toast.success('Login success...!!')
			})

   .catch(error =>{
      console.log(error.message);
	  setLoginError(error.message)

   })
	
			
  }

//   const handleLogin =() =>{
// 	signInWithGoogle()
// 	.then(result=> {
// 		 console.log(result.user)
// 		 navigate(from, { replace: true })
// 	})
	   
//  }

    return (
		<div className='h-[800px] flex justify-center items-center'>
		<div className='w-96 p-7'>
		  <h2 className='text-3xl text-center font-bold'>Login</h2>
		  <form onSubmit={handleSubmit(handleLogin ) }>
	
	<div className="form-control w-full max-w-xs">
		<label className="label"> <span className="label-text">Email
		 <input type="text" 
		 {...register("email",{ required: "Email Address is required" } )} 
		 className="input input-bordered w-full max-w-xs" /></span>
	   </label>
	   {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
	</div>
  
  <div className="form-control w-full max-w-xs">
		<label className="label"><span className="label-text">Password<input type="password" {...register("password",{ required: "Password is required",
		   minLength:{value:6, message:'password 6 characters'}
	  
	  })}className="input input-bordered w-full max-w-xs" /></span></label>
		{errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
		<label className="label"><span className="label-text">forget password</span></label>
  
  </div>
  <input type="submit" value='Login' placeholder="Login" className=" text-white btn btn-accent w-full max-w-xs" />

   <div>
	{
	  loginError && <p className='text-red-600'>{loginError}</p>
	}
   </div>

  </form>

  <p>New to doctors portal? <Link className='text-primary'  to='/signup'>Create have a account</Link> </p>
  <div className="divider">OR</div>     
	
  <button className=" btn btn-output text-white w-full max-w-xs">
	Continue with google
  </button>

  </div> 
  </div> 
    );
};

export default Login;