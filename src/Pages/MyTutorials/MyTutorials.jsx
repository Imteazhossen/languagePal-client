import React, { use, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import MyTutorialRow from '../../Components/MyTutorialRow';

const MyTutorials = () => {
    const tutorials = useLoaderData();
    const {user} = use(AuthContext);
   
    const filteredTutorials = tutorials.filter(tutorial => user.email  == tutorial.email);
     const [ftutorials, setTutorials] = useState(filteredTutorials);

   return (
    <div className="min-h-screen bg-base-100 p-5">
      <h2 className="mb-6 text-center text-3xl font-bold text-sky-500">
        My Tutorials
      </h2>

      {tutorials.length === 0 ? (
        <p className="text-center text-gray-600">
          You haven't added any tutorials yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full bg-base-100 shadow-lg">
            <thead className="bg-sky-500 text-white">
              <tr>
                <th>Image</th>
                <th>Language</th>
                <th>Price ($)</th>
                <th>Description</th>
                <th>Review</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ftutorials.map(t => 
                <MyTutorialRow ftutorials={ftutorials} setTutorials={setTutorials} t={t}></MyTutorialRow>
               
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );

};

export default MyTutorials;