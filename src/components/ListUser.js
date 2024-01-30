import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListUser( ) {
    const [users, setusers] = useState([]);
    useEffect(()=> {
        getUsers();
    },[]);
    function getUsers() {
        axios.get("http://localhost/APIPHP/index.php").then(
            function(response) {
                setusers(response.data)
            }
        )
    }
    const deleteUser = (id)=> {
        axios.delete(`http://localhost/APIPHP/user/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        })
    }
    return (
        <div className="list">
            <h1>List User</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {/* {todos.map(({text , completed} , index )=>{
                        return (
                        <div className='item'>
                        <li className={completed ? "done" : ""} key={index} onClick={()=>handleComp(index)}>{text}</li>
                        <span onClick={()=>handleDelet(index)}></span>
                        </div>)
                    })} */}
                    {
                    users.map(( user, key )=>{
                        return (
                            <tr key={key}>
                            <td style={{padding:"5px"}}>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobail}</td>
                            <td>
                                <Link style={{marginRight:"10px"}} to={`user/${user.id}/edit`}>Edit</Link>
                                <button onClick={()=> deleteUser(user.id)} >Delete</button>
                            </td>
                        </tr> 
                        )
                        })}
                </tbody>
            </table>
        </div>
    )
}
export default ListUser;