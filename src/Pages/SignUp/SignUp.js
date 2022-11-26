import React from 'react';
import {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
     const {createUser} = useContext(AuthContext);
	 const handleSignUp = event =>{

		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		

		console.log(name,email,password)

		createUser(email,password)
		.then(result=> {
		      const user = result.user;
		      console.log(user);

		

		
    

      })

    .catch(err => console.error(err));
 

	} 

	// const handleGoogleSignin = () =>{
        
	// 	handleGoogleAdd()
	// 	.then(result=>{
	// 		console.log(result.user)
	// 		navigate(from, { replace: true })
	// 	})
	// }

		// console.log(name,email,password)

		// createUser(email,password)
		// .then(result=> {
		//       const user = result.user;
		//       console.log(user);

		// 	  updateName(name)
        //   .then(() => {
        // toast.success('Name success')

		//  })

		
    //   }).catch((error) => {
    //     toast.error(error.message)

    //   })

	


    return (
        <div className=' flex justify-center py-10 bg-violet-200'>
             <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-violet-400 dark:text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign in</h1>
		<p className="text-sm dark:text-gray-400">Sign in to access your account</p>
	</div>
	<form onSubmit={handleSignUp} novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
			<div>
				<label for="name" className="block mb-2 text-sm">Name</label>
				<input type="text" name="name" id="name" placeholder="Your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			<div>
				<label for="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required/>
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label for="password" className="text-sm">Password</label>
					<Link rel="noopener noreferrer" to="/" className="text-xs hover:underline dark:text-gray-400">Forgot password?</Link>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required/>
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-white" >Sign in</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
				<Link rel="noopener noreferrer" to="/login" className="hover:underline font-bold text-violet-600">Login</Link>.
			</p>
		</div>
	</form>
</div>

        </div>
    );
};

export default SignUp;