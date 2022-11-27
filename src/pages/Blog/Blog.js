import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl text-center text-secondary font-semibold my-5'>Our <span className='text-primary'>Blog</span></h1>

            <div className='text-secondary border-primary border p-5'>
                <h1 className='text-2xl text-secondary font-bold'>What are the different ways to manage a state in a React application?</h1>
                <>
                    <strong>There are four main types of state you need to properly manage in your React apps</strong>
                    <br />
                    <p>
                        <strong>Local state:</strong> Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                    </p>

                    <br />
                    <strong>Global state:</strong>
                    <p>
                        Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                    </p>

                    <br />
                    <strong>Server state</strong>
                    <p>
                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                    </p>

                    <br />
                    <strong>URL state</strong>
                    <p>
                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                    </p>
                </>
            </div>
            <div className='text-secondary border-primary border p-5 my-10'>
                <h1 className='text-2xl text-secondary font-bold'> How does prototypical inheritance work?</h1>
                <p>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object
                </p>
            </div>

            <div className='text-secondary border-primary border p-5 my-10'>
                <h1 className='text-2xl text-secondary font-bold'> What is a unit test? Why should we write unit tests?</h1>
                <p>
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
            </div>

            <div className='text-secondary border-primary border p-5 my-10'>
                <h1 className='text-2xl text-secondary'> React vs. Angular vs. Vue?</h1>
                <>
                    <strong>Angular.js</strong>
                    <p>
                        Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications.
                    </p>
                </>
            <br />            
                <>
                    <strong>React.js</strong>
                    <p>
                        React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are only advantages and lots of advantages.

                        One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course
                    </p>
                </>
            <br />
                <>
                <strong>Vue.js</strong>
                <p>
                Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it’s simple to use and connect with other libraries or applications. This framework’s fast learning angle is almost a trademark. It’s a flexible framework that may be used as a library or a full-fledged framework for developing large web applications.
                </p>
                </>
            </div>

        </div>
    );
};

export default Blog;