import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser( ) {
        const navigate = useNavigate();

        const [inputs, setinputs] = useState({});

        const {id} = useParams();

        useEffect(()=> {
            getUser();
        }, []);

        function getUser() {
            axios.get(`http://localhost/APIPHP/user/${id}`).then(
                function(response) {
                    // console.log(response.data);
                    setinputs(response.data)
                }
            )
        }

        const handleChange = (event)=> {
            const name = event.target.name;
            const value = event.target.value;
            setinputs(values => ({...values, [name] : value }));
        }

        const handelSubmit = (event)=> {
            event.preventDefault();
            axios.put(`http://localhost/APIPHP/user/${id}/edit`,inputs).then(
                function (response) {
                    console.log(response.data);
                    navigate("/");
                }
            );
        }

        return (
            <div>
                <div>Edit User</div>
                <form className="cen" onSubmit={handelSubmit}>
                    <table cellSpacing="10">
                        <tbody>
                            <tr>
                                <th>
                                    <label>Name: </label>
                                </th>
                                <td>
                                    {/* {console.log(inputs.name)} */}
                                    <input value={inputs.name} type="text" name="name" onChange={handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Email: </label>
                                </th>
                                <td>
                                    <input value={inputs.email}   type="text" name="email" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label> Mobail: </label>
                                </th>
                                <td>
                                    <input  value={inputs.mobail}   type="text" name="mobail" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" align="right">
                                <button>Save</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
}
export default EditUser;