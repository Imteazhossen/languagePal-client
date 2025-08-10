import Lottie from 'lottie-react';
import React, { use } from 'react';
import lottieRegistration from '../../assets/lotties/Registration.json'
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

// import SocialLogIn from '../../Shared/SocialLogIn';
const Register = () => {
    const { createUser , setUser, updateUser } = use(AuthContext);
     const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const photo = e.target.photo_url.value;
        const password = e.target.password.value;
      
        //create user 

        const isLengthValid = password.length >= 6;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);

        if (!isLengthValid || !hasUppercase || !hasLowercase) {
            Swal.fire({
                icon: "error",
                title: "Invalid Password",
                html: `
            <ul style="text-align: left;">
                ${!isLengthValid ? "<li>Must be at least 6 characters long</li>" : ""}
                ${!hasUppercase ? "<li>Must contain an uppercase letter</li>" : ""}
                ${!hasLowercase ? "<li> Must contain a lowercase letter</li>" : ""}
            </ul>`,
            });
            return;
        }

        createUser(email, password)
            .then(result => {
                if (result.user) {
                    const user = result.user;
                    // console.log(user);
                    setUser(user);

                    updateUser({ photoURL: photo })
                        .then(() => {
                            setUser({ ...user, photoURL: photo });
                        })
                        .catch(error => {
                            console.log(error);
                            setUser(user)
                        });


                         updateUser({ displayName: name })
                        .then(() => {
                            setUser({ ...user, displayName: name });
                        })
                        .catch(error => {
                            console.log(error);
                            setUser(user)
                        });



                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registration Successful",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    .then(()=> {
                         navigate('/'); 
                    })
                }
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error}`,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })
        

       

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                        <Lottie loop={true} animationData={lottieRegistration}></Lottie>
                    </div>
                    <div className="card bg-emerald-50 w-full max-w-md shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold text-gray-600 text-center"> Register!</h1>
                            
                            <form onSubmit={handleRegister}  className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input w-full" placeholder="Your Name" />
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input w-full" placeholder="Password" />
                                <label className="label">Photo URL</label>
                                <input type="link" name='photo_url' className="input w-full" placeholder="Photo URL" />
                                <div>Already Have an Account? Please <Link to='/login' className="link link-hover text-blue-700">Login</Link></div>
                                <button className="btn bg-sky-500 mt-4">Create Account</button>
                            </form>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;