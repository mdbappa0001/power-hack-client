import React from 'react';
import { Link } from 'react-router-dom'
const Login = () => {
    const loginUser = e => {
        e.preventDefault()

        const email = e.target.floating_email.value
        const password = e.target.floating_password.value;
        const user = { email, password };

        fetch(`http://localhost:5000/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),

        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <section className='w-1/3 mx-auto mt-40'>
            <div>
                <h2 className='text-2xl font-semibold mb-5'>Login Now</h2>
                <form onSubmit={loginUser}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required autoComplete='off' />
                        <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required autoComplete='off' />
                        <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <p className='my-5'>New Here?? <Link to='/register' className='text-green-800'>Register</Link> </p>
                    <input type="submit" value="Login" className="text-white bg-green-900 hover:bg-green-800 focus:ring-4 focus:outline-none  font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center " />
                </form>
            </div>


        </section>
    );
};

export default Login;