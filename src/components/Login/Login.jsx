import React, { useContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import app from '../../firebase/firebase.config';

const Login = () => {

    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const googleUser = result.user;
            setUser(googleUser);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const githubUser = result.user;
            setUser(githubUser);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const [showPassword, setShowPassword] = useState(false);

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center mb-4">
                    <h1 className="text-5xl font-bold text-base-200">Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body w-full md:w-[370px] p-10 border border-warning rounded-lg">
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
                            <input type={showPassword ? "text" : "password"} name='password' placeholder="Your Password" className="input input-bordered" required />
                            <p className='mt-4 px-1 link link-hover' onClick={() => setShowPassword(!showPassword)}><small>
                                {
                                    showPassword ? <span>Hide Password</span> : <span>Show Password</span>
                                }
                                </small></p>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover mt-4">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="flex gap-4 cursor-pointer mt-4">
                                <input type="checkbox" className="checkbox" />
                                <span className="label-text">Remember me</span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Login</button>
                        </div>
                        <div className="form-control mt-2">
                            <button onClick={handleGoogleSignIn} className="btn btn-warning">Login With Google</button>
                        </div>
                        <div className="form-control mt-2">
                            <button onClick={handleGithubSignIn} className="btn btn-warning">Login With Github</button>
                        </div>
                        <p className='mt-4'>
                            <Link to='/register' className='label-text-alt link link-hover'>New to Foodies? Register Now!</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;