// import {useState} from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
export default function Datauser() {
    let [users, setUsers] = useState([])
    useEffect(() => { 

        let response =  axios.get('/datab').then((res) => {
            console.log(res.data);
            setUsers(res.data)
        })
        console.log(response);
    },[]);


    return <div>
        <table border="1">
            <tr>
                 <th>USER -ID</th>
                <th>NAME</th>
            <th>MAIL</th>
                <th>PASSWORD</th>
                <th>OPTION</th>
            </tr>
            {
                users.map((user) => {
                    return <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email }</td>
                        <td>{user.contact}</td>
                        <td><button onClick={async() => {
     await  axios.post('./delete?_id=' + user._id).then((res) => {
            console.log(res.data);
            // setUsers(res.data)
        })
                        }} >DELETE</button></td>
                         <td><button onClick={() => {
                            var res =  axios.post('./EDIT',user).then((res) => {
            console.log(res.data);
            setUsers(res.data)
        })
}} >EDIT</button></td>
                        
                    </tr>
                }
                )}
        </table>
    </div>
}
