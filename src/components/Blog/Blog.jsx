import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card bg-slate-200 m-16">
                <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <h2 className='text-xl'>01. What are the differences between controlled components and uncontrolled components?</h2>
                        <p className='text-md mt-4'>In React, controlled and uncontrolled components are two different approaches for managing form inputs and their state. The main difference lies in how the component's state is managed and updated. <br /> <br />
                        <h4 className='text-md'>Controlled Components:</h4>
                            <li>Controlled components are components where the form data is controlled by React. The component's state is stored in the component itself or in a parent component, and the component re-renders based on that state.</li>
                            <li>The component receives its current value through props and notifies changes through callbacks, typically using the 'onChange' event handler.</li>
                            <li>To update the component's state, you need to explicitly handle the 'onChange' event and update the state accordingly, ensuring that the component reflects the new value.</li>
                            <li>Controlled components provide more control and allow for validation or modification of the input data before updating the state or propagating it to other components.</li> <br /><br />
                            <h4 className='text-md'>Uncontrolled Components:</h4>
                            <li>Uncontrolled components are components where the form data is handled by the DOM itself, rather than being managed by React.</li>
                            <li>The component stores its own state internally using a ref, and React does not have direct control over its state.</li>
                            <li>In uncontrolled components, the value of the input is typically accessed through a ref after user interaction or when needed.</li>
                            <li>Uncontrolled components are simpler to set up as they require less code and no event handling for updating the state.</li>
                            <li>They are useful for cases where we don't need to perform validation or modify the input data before using it.</li>
                        </p> <br /> <br />
                        <h2 className='text-xl'>02. How to validate React props using PropTypes?</h2>
                        <p className='text-md mt-4'>
                            <li>Install 'PropTypes': Make sure we have the prop-types package installed.</li>
                            <li>Import PropTypes: Import the PropTypes module in the component file where we want to validate the props.</li>
                            <li>Define prop types: Below our component declaration, define the prop types using the 'propTypes' object</li>
                            <li>Define the prop types: For each prop we want to validate, define its type and any additional validation requirements</li>
                            <li>Check the prop types: During development, React will automatically perform the prop type checks and show warnings in the console if the props don't match the defined types. Make sure to check the console for any potential warnings or errors related to prop type validation.</li>
                        </p> <br /> <br />
                        <h2 className='text-xl'>03. What are the differences between Node JS and Express JS?</h2>
                        <p className='text-md mt-4'>Node.js and Express.js are both popular technologies used in web development, but they serve different purposes. Here are the key differences between Node.js and Express.js: <br />
                        </p> <br />
                        <h4 className='text-md'>Node JS:</h4>
                            <li>Node.js is a runtime environment that allows us to run JavaScript code outside of the browser, on the server-side.</li>
                            <li>It provides an event-driven, non-blocking I/O model, which makes it highly efficient and suitable for building scalable network applications.</li>
                            <li>Node.js uses the V8 JavaScript engine (developed by Google) to execute JavaScript code.</li>
                            <li>With Node.js, we can build various types of applications, including web servers, command-line tools, desktop applications, real-time applications, and more.</li>
                            <li>It provides a rich set of built-in modules and APIs that allow us to perform file system operations, network communication, and other tasks.</li>
                            <li>Node.js is platform-independent and can run on various operating systems, such as Windows, macOS, and Linux.</li> <br /><br />
                            <h4 className='text-md'>Express JS:</h4>
                            <li>Express.js is a web application framework built on top of Node.js. It simplifies the process of building web applications and APIs by providing a set of features and abstractions.</li>
                            <li>It provides a minimal, unopinionated, and flexible framework for building web applications. It allows developers to structure their applications as they see fit.</li>
                            <li>Express.js provides a routing mechanism that allows us to define routes for different HTTP methods (GET, POST, PUT, DELETE, etc.) and handle requests to those routes.</li>
                            <li>It includes middleware support, which allows us to define functions that can be executed in a sequence before or after handling a request. Middleware functions can perform tasks such as authentication, logging, error handling, etc.</li>
                            <li>Express.js integrates well with other libraries and frameworks, making it easy to add additional functionality as needed.</li>
                            <li>It does not enforce any particular database or ORM (Object-Relational Mapping) and allows us to choose the database and tools that best suit our needs.</li> <br /> <br />
                            <h2 className='text-xl'>04. What is a custom hook and why will you create a custom hook?</h2>
                            <p className='text-md mt-4'>A custom hook is a JavaScript function that uses React's built-in hooks (like useState, useEffect, useContext, etc.) and is created by a developer to encapsulate a specific behavior or logic that can be reused across multiple components in a React application. <br /> <br />
                            <li>Reusability: Custom hooks allow us to extract and encapsulate common logic into a single function, making it reusable across multiple components. This promotes code reuse and helps avoid code duplication.</li>
                            <li>Abstraction: Custom hooks enable us to abstract away complex logic or side effects into a simple and reusable interface. This can make our components cleaner and more focused on their main purpose, while keeping the underlying logic encapsulated within the custom hook</li>
                            <li>Better organization: By creating custom hooks, we can organize and modularize our codebase more effectively. Custom hooks provide a way to separate concerns and keep related logic grouped together, improving the maintainability and readability of our code.</li>
                            <li>Shareable code: Custom hooks can be shared across projects or with the community, allowing other developers to benefit from your encapsulated logic. This can help foster collaboration and speed up development by leveraging the work done by others.</li>
                            <li>Testing: Custom hooks make it easier to test the logic they encapsulate. Since hooks can be tested independently, we can write specific test cases for the custom hook itself, ensuring its behavior is correct and predictable.</li>
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;