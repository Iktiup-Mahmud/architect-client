import React from 'react';

const Reviewrow = ({review, handelDelete}) => {
    const {_id, serviceName, comment} = review;


    const handelEdit = {

    }

    

    return (
            <tr>
            <th className='flex'>
                <p onClick={() =>handelDelete(_id)} className='text-error mr-5'>X</p>
                <p onClick={handelEdit}>Edit</p>
            </th>
                <td>
                    <div className="flex items-center space-x-3">
                        {/* <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://i.pinimg.com/736x/37/5a/d3/375ad3e79624f45085d2d76e8bb8ba16--tom-cruise-profile-pictures.jpg" alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div> */}
                        <div>
                            <div className="font-bold">{serviceName}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {comment}
                </td>
                
            </tr>
    );
};

export default Reviewrow;
