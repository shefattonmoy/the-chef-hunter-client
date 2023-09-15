import React from 'react';
import error_image from '../../assets/ErrorPage.png'

const ErrorPage = () => {
    return (
        <div className='text-center m-24 p-8 bg-slate-200'>
            <img className='min-h-screen w-75 h-75'  src={error_image} alt="" />
            <h1 className='text-5xl'>Page not found</h1>
            <p className='text-3xl mt-5' style={{ color: "#717171" }}>Sorry, an unexpected error has occurred.</p>
        </div>
    );
};

export default ErrorPage;