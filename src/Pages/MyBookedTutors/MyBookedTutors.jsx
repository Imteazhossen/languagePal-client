// src/Pages/MyBookedTutors/MyBookedTutors.jsx
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router';

const MyBookedTutors = () => {
  const { user } = useContext(AuthContext);
  const bookedTutors = useLoaderData()
  const filteredBookedTutors = bookedTutors.filter(tutor => user.email == tutor.email);
  // console.log(filteredBookedTutors);
  // console.log(bookedTutors);

  // const filtered = bookedTutors.filter((t) => t.email === user.email);
  const [myTutors, setMyTutors] = useState(filteredBookedTutors);

  



  const handleReview = (id, index) => {
  
  fetch(`http://localhost:3000/booked-tutor/${id}`, { method: 'PUT' })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Server error');
      }
     
      return fetch(`http://localhost:3000/booked-tutor/${id}`);
    })
    .then((res) => res.json())           
    .then((updatedDoc) => {
      setMyTutors((prev) => {
        const copy = [...prev];
        copy[index].rating = updatedDoc.rating; 
        return copy;
      });
      Swal.fire('Thanks!', 'Your review has been recorded.', 'success');
    })
    .catch((err) => {
      console.error(err);
      Swal.fire('Oops!', 'Something went wrong.', 'error');
    });




    
};


  return (
    <div className="min-h-screen bg-base-100 p-5">
      <h2 className="text-3xl font-bold text-sky-500 text-center mb-6">
        My Booked Tutors
      </h2>

      {filteredBookedTutors.length === 0 ? (
        <p className="text-center text-gray-600">You have no bookings yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-sky-100 text-sky-600">
              <tr>
                <th>Image</th>
                <th>Language</th>
                <th>Name</th>
                <th>Price ($)</th>
                <th>Reviews</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myTutors.map((tutor, index) => (
                <tr key={tutor._id} className="bg-base-100">
                  <td>
                    <img
                      src={tutor.image}
                      className="h-16 w-16 rounded object-cover"
                    />
                  </td>
                  <td>
                    <div className="font-semibold">{tutor.language}</div>
                    <div className="text-sm text-gray-500">
                      {tutor.tutorEmail}
                    </div>
                  </td>
                  <td>{tutor.tutorName}</td>
                  <td>${tutor.price}</td>
                  <td>{tutor.rating}</td>
                  <td>
                   
                    <button  onClick={() => handleReview(tutor._id, index)} className="btn btn-sm bg-sky-500 text-white">Review</button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookedTutors;
