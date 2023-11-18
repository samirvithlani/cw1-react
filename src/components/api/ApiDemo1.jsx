import axios from "axios";
import React, { useState } from "react";

export const ApiDemo1 = () => {
  //fetch..
  //axios package...
  const [users, setusers] = useState([]);

  const getApiCall = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log(res);
        console.log(res.data.data);
        console.log(res.status);
        setusers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Api Demo 1</h1>
      <button onClick={() => getApiCall()}>Get Api Call</button>
      {
        // users && users[0] && users[0].id
        users[0]?.id
      }

      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">EMAIL</th>
            <th scope="col">FIRST_NAME</th>
            <th scope="col">LAST_NAME</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>
                  <img src={user.avatar} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
