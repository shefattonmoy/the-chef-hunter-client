import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h3 className='text-7xl text-white text-center font-bold mt-64'>Foodies</h3>
            <p className='text-3xl text-white text-center font-semibold mt-4'>The Home of Food Lovers</p>
        </div>
    );
};

export default Home;