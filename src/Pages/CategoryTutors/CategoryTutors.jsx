import { useEffect, useState } from "react";
import { useParams } from "react-router";


const CategoryTutors = () => {
  const { category } = useParams();
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://language-exchange-server-plum.vercel.app/tutors')
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor) => (
            <div key={tutor._id} className="bg-base-100 shadow p-5 rounded-lg">
              <img src={tutor.image} alt={tutor.name} className="w-full h-40 object-cover rounded" />
              <h3 className="text-xl font-semibold mt-3">{tutor.name}</h3>
              <p><strong>Language:</strong> {tutor.language}</p>
              <p><strong>Price:</strong> ${tutor.price}</p>
              <p><strong>Review:</strong> {tutor.review}</p>
              <p className="mt-2 text-sm text-gray-600">{tutor.details}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryTutors;
