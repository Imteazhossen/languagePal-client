import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TutorCard from '../../Components/TutorCard';

const FindTutorCategory = () => {
    const { category } = useParams();
    const [tutors, setTutors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/tutors')
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter(
                    (tutor) => tutor.language.toLowerCase() === category.toLowerCase()
                );
                setTutors(filtered);
                setLoading(false);
            });
    }, [category]);

    if (loading) {
        return <p className="text-center mt-10">Loading...</p>;
    }
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-sky-500 text-center mb-8 capitalize">
                {category} Tutors
            </h2>

            {tutors?.length === 0 ? (
                <p className="text-center text-gray-500">No tutors found for {category}.</p>
            ) : (
                <div className="space-y-6">
                    {tutors.map((tutor) => (
                        <TutorCard key={tutor._id} tutor={tutor} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FindTutorCategory;