import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const Registration = () => {
    const [error, setError] = useState('');
    const { user, createUser } = useContext(AuthContext);
    console.log(createUser);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm);

        setError('');

        if (password !== confirm) {
            setError('Please try again!');
            return
        }
        else if (password.length < 6) {
            setError('Password must be at least 6 characters or longer!');
            return
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center mb-4">
                    <h1 className="text-5xl font-bold text-base-200">Register</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body w-full md:w-[370px] p-10 border border-warning rounded-lg">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                            <label className="flex gap-4 cursor-pointer mt-4">
                                <input type="checkbox" className="checkbox mb-6" required />
                                <span className="label-text">Accept terms & conditions</span>
                            </label>                          
                        </div>
                        <div className="form-control">
                            <button className="btn btn-warning">Register</button>
                        </div>
                        <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover mt-4">Already have an account? Login!</Link>
                            </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;