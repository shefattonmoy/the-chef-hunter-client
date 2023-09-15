import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import background_image from '../assets/bg_image.jpg'

const Layout = () => {
    return (
        <div className='min-h-screen relative bg-cover bg-center justify-center bg-neutral w-full object-contain' style={{ backgroundImage: `url(${background_image})` }}>
            <div>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>

    );
};

export default Layout;