import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo2 = () => {
    const [users, setusers] = useState([])
    const getApiCall = () => {

        axios.get("http://localhost:3001/user/user").then((res) => {
            console.log(res);
            console.log(res.data);
            console.log(res.data.data);
            setusers(res.data.data)
            
          }).catch((err) => {
            console.log("error....",err);
          })

    }
  return (
    <div>
        <h1>Api Demo 2</h1>
        <button onClick={() => getApiCall()}>Get Api Call</button>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <img src={user.avatar} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
