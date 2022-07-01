import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const loginUser = e => {
        e.preventDefault()
        const email = e.target.floating_email.value
        const password = e.target.floating_password.value;
        const user = { email, password };

        fetch(`https://demo-deploy-app-50.herokuapp.com/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),

        })
            .then(response => response.json())
            .then(data => {

                if (data.token) {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    navigate(from, { replace: true });
                }
                else {
                    console.log(data)
                }

            })
    }
    return (
        <section className='w-96 rounded-32 mx-auto mt-40'>
            <div>
                <h2 className='text-2xl text-red-700 font-bold mb-5'>Login</h2>
                <form onSubmit={loginUser}>
                    <div className="relative z-0 w-full mb-4 group">
                        <input type="email" name="floating_email" placeholder="Email Address" className="input input-bordered input-error w-96" required /><br />
                    </div>
                    <div className="relative z-0 w-full mb-8 group">
                        <input type="password" name="floating_password" placeholder="Password" className="input input-bordered input-error w-96" required /><br />
                    </div>
                    <small className='my-5'>New Here?? <Link to='/register' className='text-blue-800'>Please Register</Link> </small>
                    <input type="submit" value="Login" className="text-white bg-red-700 hover:bg-black hover:text-white focus:ring-4 focus:outline-none  font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center " />
                </form>
            </div>


        </section>
    );
};

export default Login;