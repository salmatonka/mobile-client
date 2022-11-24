import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/smartphone-icon-cellphone-mobile-phone-sign-symbol-vector.webp'

const Header = () => {
    return (
        <div className="navbar bg-violet-400 py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
             <li><Link to='/blog'>Blog</Link></li>
            </ul>
          </div> 
          
          <Link to='/' className="btn btn-ghost normal-case lg:text-4xl font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
       </svg>

            
            mMarket.com</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to='/'>Home</Link></li>
           <li><Link to='/blog'>Blog</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login' className="btn bg-violet-600">Login</Link>
          <Link to='/signUp' className="btn bg-violet-600">SignUp</Link>
        </div>
      </div>
    );
};

export default Header;