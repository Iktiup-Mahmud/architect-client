import React from 'react';
import { Link } from 'react-router-dom';

const Reviewrow = ({ review, handelDelete }) => {
    const { _id, serviceName, comment } = review;

    // const [ message, setMessage ] = useState('')

    // const inputRef = useRef(null);

    // const handelEdit = (id, event) => {

    //     const updateF = inputRef.current.value;
    //     console.log(updateF)

    //     fetch(`https://server-side-orpin.vercel.app/reviewsbyuser/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updateF)
    //     })
    //         .then(res => res.json)
    //         .then(data => console.log(data))
    // }



    return (
        <tr>
            <th className='flex'>
                <p onClick={() => handelDelete(_id)} className=' btn btn-error mr-5'>X</p>
                {/* <p onClick={handelEdit}>Edit</p> */}
                {/* <label htmlFor="my-modal" className="btn">Edit</label> */}
                <Link className='btn' to={`/update/${_id}`}>Edit</Link>
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
            {/* <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Update</h3>
                    <input type="text" ref={inputRef} id={message} placeholder="Type here" name='updateF' className="input input-bordered w-full mt-5" />
                    <div className="modal-action">
                        <label htmlFor="my-modal" onClick={() => handelEdit(_id)} className="btn">Update!</label>
                        <Link to={`/reviewsbyuser/${_id}`} htmlFor="my-modal" onClick={() => handelEdit(_id)} className="btn">Update!</Link>
                    </div>
                </div>
            </div> */}


        </tr>

    );
};

export default Reviewrow;
