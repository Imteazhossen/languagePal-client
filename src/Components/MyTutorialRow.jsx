import React from 'react';
import { Link } from 'react-router';

const MyTutorialRow = ({t}) => {
    const {_id} = t;
    console.log(_id);

    const handleDelete = (_id) => {
        
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
                    <Link to={`/update-tutorial/${t._id}`}>
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