import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div>

            {/* Navbar Section */}

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                    <a className="btn btn-ghost normal-case text-4xl font-extrabold">Foodies</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to="/"><li><a>Home</a></li></Link>
                        <Link to="/recipes"><li><a>Recipe</a></li></Link>
                        <Link to="/chef"><li><a>Chef</a></li></Link>
                        <Link to="/chef_recipes"><li><a>Chef Recipes</a></li></Link>
                        <Link to="/blog"><li><a>Blog</a></li></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login"><a className='btn'>Login</a></Link>
                    {
                        user ? <>
                            <span>{user.email}</span>
                            <button onClick={handleLogOut} className="btn btn-xs">Sign Out</button>
                        </> : <Link to="/login"></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;