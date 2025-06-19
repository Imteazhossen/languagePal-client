import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router'; 
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { FaRegStar } from 'react-icons/fa';
import Swal from 'sweetalert2';

const TutorDetails = () => {
    const tutors = useLoaderData();          
    const { id } = useParams();             
    const { user } = useContext(AuthContext);
    const tutor = tutors.find(tutor => tutor._id === id);

    if (!tutor) {
        return (
            <div className="text-center mt-20 text-red-500">
                Tutor not found.
            </div>
        );
    }

    const {
        _id, image, language, price, tutorEmail, description, rating, } = tutor;

    const handleBookTutor = () => {
        if (!user) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You are not logged in",
                footer: '<a href="#">Please login.</a>'
            });
        }

        const bookedTutor = {
            tutorId: _id,
            image,
            language,
            price,
            tutorEmail,
            email: user.email,
        };

        fetch('http://localhost:3000/booked-tutors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookedTutor),
        })
            .then((res) => res.json())
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your tutor booking is successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            )
            .catch((err) => console.error(err));
    };

    return (
        <div className="max-w-4xl mx-auto my-10 bg-emerald-50 shadow-md rounded-xl p-6 flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
                <img
                    src={image}
                    className="w-full h-80 object-cover rounded-md"
                />
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
                <h2 className="text-3xl font-semibold text-sky-500">{language} Tutor</h2>
                <p className="text-gray-700">{description}</p>

                <div className="text-gray-600 space-y-1">
                    <p>
                        <span className="font-semibold">Price:</span> ${price} / session
                    </p>
                    <p>
                        <span className="font-semibold">Tutor Email:</span> {tutorEmail}
                    </p>
                    <p>
                        <span className="font-semibold">Rating:</span> <FaRegStar /> {rating}
                    </p>
                </div>
                {user ? ( <button onClick={handleBookTutor} className="btn bg-sky-500 text-white hover:bg-sky-600">Book This Tutor</button>) : ( <p className="text-red-500">Please login to book a tutor.</p> )}
            </div>
        </div>
    );
};

export default TutorDetails;
