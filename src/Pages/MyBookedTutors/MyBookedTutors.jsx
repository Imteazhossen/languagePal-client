// src/Pages/MyBookedTutors/MyBookedTutors.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router';

const MyBookedTutors = () => {
  const { user } = useContext(AuthContext);
  const bookedTutors = useLoaderData()
  const filteredBookedTutors = bookedTutors.filter(tutor => user.email  == tutor.email);
  console.log(filteredBookedTutors);
  console.log(bookedTutors);
//   const [bookedTutors, setBookedTutors] = useState([]);
//   const [loading, setLoading] = useState(true);

  // fetch booked tutors for the logged‑in user
//   useEffect(() => {
//     if (!user) return;
//     fetch(`https://your-api-url.com/bookings?email=${user.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setBookedTutors(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [user]);

//   const handleReview = async (tutorId, index) => {
//     try {
//       const res = await fetch(
//         `https://your-api-url.com/tutorials/${tutorId}/review`,
//         {
//           method: 'PATCH', // or PUT—your server route
//           headers: { 'Content-Type': 'application/json' },
//         }
//       );

//       if (res.ok) {
//         // update UI quickly without refetch
//         setBookedTutors((prev) => {
//           const updated = [...prev];
//           updated[index].review += 1;
//           return updated;
//         });
//         Swal.fire('Thanks!', 'Your review has been recorded.', 'success');
//       } else {
//         Swal.fire('Oops!', 'Something went wrong.', 'error');
//       }
//     } catch (err) {
//       console.error(err);
//       Swal.fire('Error', 'Network error', 'error');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <span className="loading loading-spinner loading-lg text-sky-500"></span>
//       </div>
//     );
//   }

  return (
    <div className="min-h-screen bg-white p-5">
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
                <th>Name / Language</th>
                <th>Price ($)</th>
                <th>Reviews</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredBookedTutors.map((tutor) => (
                <tr key={tutor._id} className="bg-white">
                  <td>
                    <img
                      src={tutor.image}
                      alt={tutor.language}
                      className="h-16 w-16 rounded object-cover"
                    />
                  </td>
                  <td>
                    <div className="font-semibold">{tutor.language}</div>
                    <div className="text-sm text-gray-500">
                      {tutor.tutorEmail}
                    </div>
                  </td>
                  <td>${tutor.price}</td>
                  <td>{tutor.review}</td>
                  <td>
                    {/* onClick={() => handleReview(tutor.tutorId, idx)} */}
                    <button className="btn btn-sm bg-sky-500 text-white">Review</button>
                    <button className="btn btn-sm bg-sky-500 text-white">Update</button>
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
