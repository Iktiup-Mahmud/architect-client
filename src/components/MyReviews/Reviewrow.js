import React from 'react';

const Reviewrow = ({review, handelDelete}) => {
    const {_id, serviceName, comment} = review;



    const handelEdit = (id, e) => {

        const updateF = e.target.updateF.value;

        fetch(`http://localhost:5000/reviewsbyuser/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateF)
        })
            .then(res => res.json)
            .then(data => console.log(data))
    }

    

    return (
            <tr>
            <th className='flex'>
                <p onClick={() =>handelDelete(_id)} className=' btn btn-error mr-5'>X</p>
                {/* <p onClick={handelEdit}>Edit</p> */}
                <label htmlFor="my-modal" className="btn">Edit</label>
            </th>
                <td>
                    <div className="flex items-center space-x-3">
                        
                        <div>
                            <div className="font-bold">{serviceName}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {comment}
                </td>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Update</h3>
                    <input type="text" placeholder="Type here" name='updateF' className="input input-bordered w-full " />
                    <div className="modal-action">
                        <label htmlFor="my-modal" onClick={() => handelEdit(_id)} className="btn">Update!</label>
                    </div>
                </div>
            </div>
                
            </tr>
            
    );
};

export default Reviewrow;
