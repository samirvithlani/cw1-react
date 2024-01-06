import React, { useState } from "react";
import { AppContext } from "../../context";
import { StudentList } from "./StudentList";


export const Students = () => {
  const [studentsData, setstudentsData] = useState([
    {
      id: 1,
      name: "Rahul",
      age: 20,
      city: "Delhi",
    },
    {
      id: 2,
      name: "Rohit",
      age: 21,
      city: "Mumbai",
    },
    {
      id: 3,
      name: "Raj",
      age: 22,
      city: "Chennai",
    },
  ]);
  return (
    <div>
      <h1>hello</h1>
      <AppContext.Provider value={{ studentsData}}>
        <StudentList />
      </AppContext.Provider>
    </div>
  );
};
