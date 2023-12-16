import axios from "axios";
import React, { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const UserList = () => {
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false)
  const fetchUsers = async () => {
    setisLoading(true)
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res.data);
    setusers(res.data.data);
    setisLoading(false)
  };

  const deleteUser = async (id) => {
    
    const res = await axios.delete("https://node5.onrender.com/user/user/" + id);
    console.log(res.data);
    toast.error('User deleted successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    fetchUsers();
    
  }
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("useEffect called");
    fetchUsers();
  }, []); // [] means useEffect will be called only once

  return (
    <div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* {
            count
        }
            <button onClick={() => setcount(count + 1)}>Click Me</button> */}
            
            {/* <BounceLoader color="#36d7b7" loading={isLoading} size={100} /> */}
            
      <table class="table">
        <thead>
          <tr>
            {/* <th scope="col">ID</th> */}
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">STATUS</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                {/* <th scope="row">{user._id}</th> */}
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.isActive ? "Active" : "Inactive"}</td>
                <td>
                    <button onClick={()=>deleteUser(user?._id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
