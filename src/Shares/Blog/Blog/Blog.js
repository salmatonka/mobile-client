import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
       
        <>
              <h1 className='text-3xl font-bold text-center'>Question</h1>
         
         {/* 1.Question...... */}
       <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          
            <div className="mt-3">
                <Link rel="noopener noreferrer" to='/' className="text-3xl font-bold hover:underline">1.What are the different ways to manage a state in a React application?</Link>
                <p className="mt-2"><code className="text-xl">Answer: </code> Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.
                The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:

               <h5>a. Hooks</h5> 
               <h5>b. React Context API</h5> 
               <h5>c. Apollo Link State</h5> 
               <h5>We will, however, focus on the use of the setState() method.</h5></p>
            </div>
        </div>
    </div>

   {/* 2.Question...... */}

    <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          
            <div className="mt-3">
                <Link rel="noopener noreferrer" to='/' className="text-3xl font-bold hover:underline">2.How does prototypical inheritance work?</Link>
                <p className="mt-2 pb-5"><code className="text-xl">Answer: </code>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>

                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200520193336/Untitled-Diagram108.png" alt="" />
            </div>
        </div>
    </div>
    
    {/* 3.Question...... */}

    <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          
            <div className="mt-3">
                <Link rel="noopener noreferrer" to='/' className="text-3xl font-bold hover:underline">3.What is a unit test?Why should we write unit tests?</Link>
                <p className="mt-2"><code className="text-xl">Answer: </code> A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.
                They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</p>
            </div>
        </div>
    </div>


       {/* 4. Question...... */}

       <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          
            <div className="mt-3">
                <Link rel="noopener noreferrer" to='/' className="text-3xl font-bold hover:underline">4.React vs. Angular vs. Vue?</Link>
                <p className="mt-2"><code className="text-xl">Answer: </code> Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>

                <img className='h-50'  src="https://iotvnaw69daj.i.optimole.com/cb:n2y9~6666f/w:auto/h:auto/q:mauto/f:avif/https://www.codeinwp.com/wp-content/uploads/2019/01/2021-star-history.png" alt="" />
            </div>
        </div>
    </div>



        </>
    );
};

export default Blog;