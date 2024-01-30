import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatUser( ) {
    const navigate = useNavigate();
    const [inputs, setinputs] = useState({});
    const handleChange = (event)=> {
        const name = event.target.name;
        const value = event.target.value;
        setinputs(values => ({...values, [name] : value }));
    }
    const handelSubmit = (event)=> {
        event.preventDefault();
        axios.post("http://localhost/APIPHP/index.php",inputs).then(
            function (response) {
                console.log(response.data);
                navigate("/");
            }
        );
    }
    return (
        <div>
            <div>List User</div>
            <form className="cen" onSubmit={handelSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <input type="text" name="name" onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td>
                                <input type="text" name="email" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label> Mobail: </label>
                            </th>
                            <td>
                                <input type="text" name="mobail" onChange={handleChange} />
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
export default CreatUser;