import React from 'react';
import { useLoaderData } from 'react-router';
import TutorCard from '../../Components/TutorCard';

const FindTutor = () => {
    const tutors = useLoaderData();
    console.log(tutors);
    console.log(tutors.length);
    return (
        <div>
           <h2 className='md:text-6xl text-4xl font-bold text-sky-500 text-center my-10'>Find Your Desired Tutors</h2>
           <div className="grid gap-5 mb-15 px-5 md:px-15 grid-cols-1 md:grid-cols-2">
            {
                tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor}></TutorCard>)
            }
           </div>
        </div>
    );
};

export default FindTutor;