import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-base-100 text-base-content">
            <Navbar></Navbar>
            <div className="bg-base-100">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default RootLayout;