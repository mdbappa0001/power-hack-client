import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
const Register = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const createNewUser = e => {
        e.preventDefault()

        const email = e.target.floating_email.value
        const password = e.target.floating_password.value;
        const user = { email, password };

        fetch(`https://demo-deploy-app-50.herokuapp.com/registration`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),

        })
            .then(response => response.json())
            .then(data => {

                if (data.acknowledged) {
                    toast.success('Please Login with your email and pass')
                    navigate(from, { replace: true });
                    e.target.reset()
                }
                else {
                    toast.error(data.message)
                    e.target.reset()
                    return
                }
            })
    }
    return (
        <section className='mx-auto mt-40 rounded-32 w-96'>
            <div>
                <h2 className='text-2xl text-black font-bold mb-5'>Register Now</h2>
                <form onSubmit={createNewUser}>
                    <div className="relative z-0 w-full mb-4 group">
                        <input type="email" name="floating_email" placeholder="Email Address" className="input input-bordered input-error w-96" required /><br />
                    </div>
                    <div className="relative z-0 w-full mb-8 group">
                        <input type="password" name="floating_password" placeholder="Password" className="input input-bordered input-error w-96" required /><br />
                    </div>
                    <small className='my-5'>Already Have An Account?? <Link to='/login' className='text-blue-800'>Please Login</Link> </small>
                    <input type="submit" className="text-white bg-red-700 hover:bg-black hover:text-white focus:ring-4 focus:outline-none  font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center rounded " value="Register" />
                </form>
            </div>


        </section>
    );
};

export default Register;