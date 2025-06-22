// import React, { use } from 'react';
// Updated: useContext + correct router imports and path tweaks
import React, { useContext } from 'react';
import { FaAmericanSignLanguageInterpreting } from 'react-icons/fa';

import { AuthContext } from '../Context/AuthContext/AuthContext';
import userLogo from '../assets/userLogo.png';
import { Link, NavLink } from 'react-router';
// import { Tooltip as ReactTooltip } from 'react-tooltip';

const Navbar = () => {

  
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert('You have logged out successfully');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-emerald-50 shadow-sm md:px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-5 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>


          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
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
                to="/my-booked-tutors"
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


        <Link to="/" className="btn btn-ghost text-lg md:text-xl -ml-5 text-sky-500">
          LanguagePal <FaAmericanSignLanguageInterpreting size={30} />
        </Link>
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
              to="/my-booked-tutors"
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


      <div className="navbar-end gap-2">
         <label className="swap swap-rotate">
                    <input
                        type="checkbox"
                        onChange={(e) => {
                            if (e.target.checked) {
                                document.documentElement.setAttribute('data-theme', 'dark');
                            } else {
                                document.documentElement.setAttribute('data-theme', 'light');
                            }
                        }}
                        className="toggle outline border-black bg-base-200
                        [--tglbg:var(--color-sky-500)] 
                            checked: border-black checked:bg-blue-400 
                          checked:[--tglbg:var(--color-blue-900)]"
                    />
                </label>
        {/* Profile image */}
        <img
          src={user?.photoURL || userLogo}
          alt="profile"
          title={user?.displayName || 'User'}  
          className="h-10 w-10 rounded-full object-cover border-2 border-sky-500"
        />

        {user ? (
          <button onClick={handleLogout} className="btn bg-sky-500 text-white ml-2">
            Logout
          </button>
        ) : (
          <NavLink to="/login">
            <button className="btn bg-sky-500 text-white ml-2">Login</button>
          </NavLink>
        )}

        {!user && (
          <Link to="/register">
            <button className="btn bg-sky-500 text-white ml-2">Sign Up</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
