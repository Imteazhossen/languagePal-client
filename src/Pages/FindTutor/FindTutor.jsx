import React, { useEffect, useState } from 'react';
import TutorCard from '../../Components/TutorCard';

const FindTutor = () => {
  const [search, setSearch] = useState('');   // user’s search text
  const [tutors, setTutors] = useState([]);   // tutors to display

  // 🔹 Fetch *all* tutors once on mount
  useEffect(() => {
    fetch('https://language-exchange-server-plum.vercel.app/tutors')
      .then((res) => res.json())
      .then(setTutors)
      .catch(console.error);
  }, []);

  // 🔹 Fetch filtered tutors whenever search text changes
  useEffect(() => {
    if (search.trim() === '') {
      // If search box is cleared, show *all* tutors again
      fetch('https://language-exchange-server-plum.vercel.app/tutors')
        .then((res) => res.json())
        .then(setTutors)
        .catch(console.error);
    } else {
      fetch(
        `https://language-exchange-server-plum.vercel.app/tutors?searchParams=${encodeURIComponent(
          search
        )}`
      )
        .then((res) => res.json())
        .then(setTutors)
        .catch(console.error);
    }
  }, [search]);

  return (
    <div>
      <h2 className="md:text-4xl text-3xl font-bold text-sky-500 text-center my-10">
        Find Your Desired Tutors
      </h2>

      {/* search box */}
      <div className="flex justify-center my-5">
        <label className="input md:w-[800px] w-[450px] rounded-full border-sky-500">
          {/* icon */}
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            className="grow"
            placeholder="Search your language teacher"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {/* tutors grid */}
      <div className="grid gap-5 mb-15 px-5 md:px-15 grid-cols-1 md:grid-cols-2">
        {tutors.length === 0 ? (
          <div className="flex flex-col col-span-full space-y-5 justify-center items-center">
            <span className="loading loading-spinner text-info "></span>
             <p className="text-center ">Find your subject teacher </p>
             </div>
         
        ) : (
          tutors.map((t) => <TutorCard key={t._id} tutor={t} />)
        )}
      </div>
    </div>
  );
};

export default FindTutor;
