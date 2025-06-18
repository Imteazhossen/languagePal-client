import React, { use } from 'react';
import { FaAmericanSignLanguageInterpreting } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import userLogo from '../assets/userLogo.png'

// import { Tooltip as ReactTooltip } from 'react-tooltip'
// import WelcomeMessage from './WelcomeMessage';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogout = () => {
        logOut().then(() => {
            alert("you have logged out successfully");
        }).catch((error) => {
            console.log(error);
        });

    }


    //    console.log(user.email);
    //     console.log(user.metadata
    // .photoURL);
    return (
        <div className="navbar bg-emerald-50 shadow-sm md:px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                      <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-4 border-sky-500 font-bold'
                    : 'text-gray-500 font-bold'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/find-tutors"
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-4 border-sky-500 font-bold'
                    : 'text-gray-500 font-bold'
                }
              >
                Find Tutors
              </NavLink>
            </li>
            <li>
              <NavLink  to="/add-tutorial" className={({ isActive }) =>isActive? 'border-b-4 border-sky-500 font-bold' : 'text-gray-500 font-bold' }>Add Tutorials </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-tutorials"
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-4 border-sky-500 font-bold'
                    : 'text-gray-500 font-bold'
                }
              >
                My Tutorials
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-booked"
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-4 border-sky-500 font-bold'
                    : 'text-gray-500 font-bold'
                }
              >
                My Booked Tutors
              </NavLink>
            </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-lg md:text-xl text-sky-500">LanguagePal <FaAmericanSignLanguageInterpreting size={30} /> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? 'border-b-4 border-sky-500 font-bold'
                                    : 'text-gray-500 font-bold'
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/find-tutors"
                            className={({ isActive }) =>
                                isActive
                                    ? 'border-b-4 border-sky-500 font-bold'
                                    : 'text-gray-500 font-bold'
                            }
                        >
                            Find Tutors
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/add-tutorial"
                            className={({ isActive }) =>
                                isActive
                                    ? 'border-b-4 border-sky-500 font-bold'
                                    : 'text-gray-500 font-bold'
                            }
                        >
                            Add Tutorials
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/my-tutorials"
                            className={({ isActive }) =>
                                isActive
                                    ? 'border-b-4 border-sky-500 font-bold'
                                    : 'text-gray-500 font-bold'
                            }
                        >
                            My Tutorials
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/my-booked"
                            className={({ isActive }) =>
                                isActive
                                    ? 'border-b-4 border-sky-500 font-bold'
                                    : 'text-gray-500 font-bold'
                            }
                        >
                            My Booked Tutors
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className='ml-4'>
                    {/* <WelcomeMessage></WelcomeMessage> */}
                </div>



                <div className=" ml-5">

                    <img
                        data-tooltip-id="my-tooltip-2"
                        data-tooltip-content='hi'
                        className='w-12 h-12 rounded-full '
                        src={`${user ? user.photoURL : userLogo}`}
                        alt="user"
                    />
                    {/* <ReactTooltip id="my-tooltip-2" place="bottom" variant="info" /> */}
                </div>

                {
                    user ? <button onClick={handleLogout} className='btn bg-sky-500 text-white ml-5'>Logout</button> : <NavLink to='/login'><button className='btn bg-sky-500 text-white ml-5'>Login</button></NavLink>
                }


                <Link to='/register'><button className='btn bg-sky-500 text-white ml-2'>Sign Up</button></Link>


            </div>
        </div>
    );
};

export default Navbar;