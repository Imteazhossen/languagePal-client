import React from 'react';
import { Link } from 'react-router';
import Navbar from '../../Shared/Navbar';
import Footer from '../../Shared/Footer';
import errorCat from '../../assets/lotties/error-animation.json'
import Lottie from 'lottie-react';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[50vh]  rounded-2xl bg-emerald-50 shadow-2xl w-8/10 md:w-6/10 mx-auto my-20 flex flex-col items-center p-10 justify-center gap-6 text-center">
             <Lottie loop={true} style={{ width: '250px' }} animationData={errorCat}></Lottie>
                <h1 className="text-6xl md:text-7xl font-bold text-sky-500">404</h1>
                <p className="text-gray-600">Oops - page not found!</p>
                <Link to="/" className="btn bg-sky-500 text-white">Back to Home</Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;