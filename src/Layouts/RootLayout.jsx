import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-gray-50">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default RootLayout;