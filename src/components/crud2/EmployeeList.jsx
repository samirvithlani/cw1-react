import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const EmployeeList = () => {
  const [employees, setemployees] = useState([]);

  const getAllEmployees = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res.data.data);
    setemployees(res.data.data);
  };

  useEffect(() => {
    console.log("useEffect called");
    getAllEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    const res = await axios.delete(
      "https://node5.onrender.com/user/user/" + id
    );
    console.log(res);
    if (res.status === 204) {
      toast.error("Employee Deleted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      getAllEmployees();
    }
  };

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
        theme="dark"
      />

      <h1>EMPLOYEE LIST</h1>
      <table className="table table-hover table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((emp) => {
            return (
              <tr>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.age}</td>
                <td>{emp.isActive == true ? "Active" : "Not Active"}</td>
                <td>
                  <button
                    onClick={() => deleteEmployee(emp._id)}
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
