import React, { useContext } from "react";
import { AppContext } from "../../context";
import { StudentSubList } from "./StudentSubList";

export const StudentList = () => {
  const { studentsData } = useContext(AppContext);
  console.log(studentsData);
  return (
    <div>
      <h1>StudentList</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {studentsData?.map((student) => {
            return (
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>child</h3>
      <StudentSubList />
    </div>
  );
};
