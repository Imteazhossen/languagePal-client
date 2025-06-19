import { FaStar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";

const TutorCard = ({ tutor }) => {
    const {

        image,
        language,
        price,
        tutorEmail,
        email,
        _id
    } = tutor;

    return (
        <div className="card md:flex-row flex-col bg-white shadow-md hover:shadow-lg p-4 md:p-6 rounded-lg mx-auto">
            {/* Image */}
            <div className="w-full md:w-48 flex-shrink-0 mx-auto">
                <img src={image} alt={language + " tutor"} className="rounded-md object-cover h-full w-full" />
            </div>

            {/* Details */}
            <div className="flex-1 px-4 mt-4 md:mt-0 md:px-6 space-y-2">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-gray-700 capitalize">{language} Tutor</h2>
                </div>

                <p className="text-sm text-gray-500"><MdEmail className="inline mr-1 text-sky-500" /> {tutorEmail}</p>
                <p className="text-sm text-gray-500">User Email: {email}</p>

                <p className="text-gray-600">
                    Learn {language} from a professional native speaker.
                </p>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mt-4">
                    <div className="text-xl text-sky-500 font-bold">${price} <span className="text-sm text-gray-500">/ session</span></div>
                    <div className="flex gap-2">
                        <Link  to={`/tutor-details/${_id}`}>  <button className="btn bg-sky-500 text-white hover:bg-emerald-500">Tutor details</button></Link>
                      

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;
