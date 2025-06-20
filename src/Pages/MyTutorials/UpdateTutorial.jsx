import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateTutorial = () => {
    const { user } = use(AuthContext);
    const tutorial = useLoaderData();
    const { _id, image, language, price, description, review, } = tutorial;

    //   const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const tutorialData = {
            name: user.displayName,
            email: user.email,
            image: form.image.value,
            language: form.language.value,
            price: parseFloat(form.price.value),
            description: form.description.value,
            review: 0,
            createdAt: new Date()
        };

        console.log(tutorialData);


        fetch(`http://localhost:3000/tutorials/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tutorialData)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })




    };

    return (
        <div className="min-h-screen bg-white p-5 flex justify-center items-center">
            <div className="w-full max-w-3xl bg-emerald-50 my-10 shadow-xl p-10 rounded-xl">
                <h2 className="text-3xl font-bold text-sky-500 text-center mb-6">Update Your Tutorial</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="label">User Name</label>
                            <input
                                type="text"
                                name="name"
                                // defaultValue={user?.displayName}
                                defaultValue={user?.email}
                                readOnly

                                className="input input-bordered w-full bg-gray-100"
                            />
                        </div>
                        <div>
                            <label className="label">Email</label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                readOnly
                                className="input input-bordered w-full bg-gray-100"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="label">Tutorial Image URL</label>
                            <input
                                type="text"
                                name="image"
                                defaultValue={image}
                                placeholder="Image Link"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="label">Language</label>
                            <select name='language' defaultValue={language} className="select ">
                                <option disabled={true}>Pick a Language</option>
                                <option>Bangla</option>
                                <option>English</option>
                                <option>French</option>
                                <option>German</option>
                                <option>Urdu</option>
                                <option>Arabic</option>
                                <option>Chinese</option>
                                <option>Italian</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="label">Price $</label>
                            <input
                                type="number"
                                name="price"
                                defaultValue={price}
                                placeholder="Amount"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="label">Review</label>
                            <input
                                type="number"
                                name="review"
                                defaultValue={review}
                                readOnly
                                className="input input-bordered w-full bg-gray-100"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="label">Description</label>
                        <textarea
                            name="description"
                            rows={4}
                            defaultValue={description}
                            placeholder="Write a short description about the tutorial..."
                            className="textarea textarea-bordered w-full"
                            required
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn  bg-sky-500 hover:bg-emerald-500 text-white px-10">
                            Update Tutorial
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTutorial;