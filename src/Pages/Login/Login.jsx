import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';

import Swal from 'sweetalert2';
import lottieLogIn from '../../assets/lotties/LogIn.json'
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Lottie from 'lottie-react';


const Login = () => {

    const { googleSignIn, signIn , user } = use(AuthContext);
    console.log(user);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);\
                if (user) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Login successful",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    setTimeout(() => {
                        navigate("/"); // or navigate("/") if your homepage is at root
                    }, 1500);
                }
                // Navigate(location.state || "/home");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: `Error: ${errorCode}`,
                    text: errorMessage,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });


    }


    const handleGoogleSignIn = () => {
        googleSignIn();
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content gap-10 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">

                        <Lottie loop={true} style={{ width: '400px' }} animationData={lottieLogIn}></Lottie>
                    </div>
                    <div className="text-center lg:text-left">

                    </div>

                    <div className="card bg-emerald-50 w-full max-w-md shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold text-gray-600 text-center">Login!</h1>

                            <form onSubmit={handleLogin} className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input w-full" placeholder="Email" />

                                <label className="label">Password</label>
                                <input type="password" name="password" className="input w-full" placeholder="Password" />

                                <div className="mt-2">
                                    <p className="text-gray-600">
                                        Don't have an account? Please
                                        <Link to="/register">
                                            <span className="text-blue-700 underline ml-1">Register</span>
                                        </Link>
                                    </p>
                                </div>

                                <button className="btn bg-sky-500 text-white mt-4">Login</button>
                            </form>

                            <div className="divider divider-info">Or</div>

                            <button onClick={handleGoogleSignIn} className="btn bg-white text-black border border-gray-300 w-full">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="mr-2">
                                    <g>
                                        <path d="M0 0h512v512H0z" fill="#fff" />
                                        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                                        <path fill="#4285f4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                                        <path fill="#fbbc02" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                                        <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                                    </g>
                                </svg>
                                Login with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;