import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyTutorialRow = ({ t , ftutorials, setTutorials }) => {
    const { _id } = t;


    const handleDelete = (_id) => {
        // console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            // console.log(result.isConfirmed);
            if (result.isConfirmed) {

                //start deleting the tutorial


                fetch(`http://localhost:3000/tutorials/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const updated = ftutorials.filter(item => item._id !== _id);
                            setTutorials(updated);
                        }
                    })

            }
        });
    }
    return (
        <tr key={t._id} className="hover">
            <td>
                <img
                    src={t.image}

                    className="h-16 w-24 rounded object-cover"
                />
            </td>
            <td>{t.language}</td>
            <td>{t.price}</td>
            <td className="max-w-xs truncate">{t.description}</td>
            <td>{t.review}</td>
            <td className="flex flex-col md:flex-row gap-2 mt-2">
                <Link to={`/updateTutorial/${_id}`}>
                    <button className="btn btn-sm bg-emerald-500 text-white hover:bg-emerald-600">
                        Update
                    </button>
                </Link>

                <button onClick={() => handleDelete(t._id)}

                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default MyTutorialRow;