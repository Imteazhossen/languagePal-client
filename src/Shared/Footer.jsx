import React from 'react';
import { FaAmericanSignLanguageInterpreting, FaFacebookSquare, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa';
import { NavLink } from 'react-router';


const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-emerald-50 text-base-content p-10">
            <aside>
                <span className='text-sky-500'>
                    <FaAmericanSignLanguageInterpreting size={60} />
                </span>
                <p>
                    LanguagePal Ltd.<br />
                    Empowering Global Learning Since 2024
                </p>
            </aside>
            <nav>
                <h6 className="footer-title text-sky-500">Quick Links</h6>

                <NavLink to='/' className={({ isActive }) => isActive ? 'border-b-4 border-sky-500 font-bold' : 'text-gray-500 font-bold'}>Home</NavLink>
                <NavLink to='/find-tutors' className={({ isActive }) => isActive ? 'border-b-4 border-sky-500 font-bold' : 'text-gray-500 font-bold'}>Find Tutors</NavLink>
                <NavLink to='/add-tutorial' className={({ isActive }) => isActive ? 'border-b-4 border-sky-500 font-bold' : 'text-gray-500 font-bold'}>Add Tutorials</NavLink>
                <NavLink to='/my-tutorials' className={({ isActive }) => isActive ? 'border-b-4 border-sky-500 font-bold' : 'text-gray-500 font-bold'}>My Tutorials</NavLink>
                <NavLink to='/my-booked-tutors' className={({ isActive }) => isActive ? 'border-b-4 border-sky-500 font-bold' : 'text-gray-500 font-bold'}>My Booked Tutors</NavLink>
            </nav>
            <nav>
                <h6 className="footer-title text-sky-500">User Access</h6>
                <NavLink to='/login' className={({ isActive }) => isActive ? 'border-b-4 border-sky-500 font-bold' : 'text-gray-500 font-bold'}>Login</NavLink>
                <NavLink to='/register' className={({ isActive }) => isActive ? 'border-b-4 border-sky-500 font-bold' : 'text-gray-500 font-bold'}>Sign Up</NavLink>
            </nav>
            <nav>
                <h6 className="text-sky-500 footer-title">Social Links</h6>
                <a href='https://www.facebook.com/ImteazMahin' target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare size={25} />
                </a>
                <a href='https://www.instagram.com/_imteaz_hossen_?igsh=MWRpc2s5OWZqdmc0Mw==' target='_blank' rel="noopener noreferrer">
                    <FaInstagramSquare size={25} />
                </a>
                <a href='https://github.com/Imteazhossen' target='_blank' rel="noopener noreferrer">
                    <FaGithubSquare size={25} />
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
