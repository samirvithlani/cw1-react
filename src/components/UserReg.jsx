import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const UserReg = () => {
  const { register, handleSubmit } = useForm();
  const [userData, setuserData] = useState({});
  const [favColor, setfavColor] = useState("");
  const [isSubmited, setisSubmited] = useState(false);

  //register is a array of objects and handleSubmit is a function
  //submitHandler userDefine....
  const boxStyle = {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
    width: "300px",
    shadow: "5px 5px 5px 5px gray",
    backgroundColor: favColor,
  };
  const submitHandler = (data) => {
    console.log(data);
    setuserData(data);
    setfavColor(data.favcolor);
    setisSubmited(true); //for conditional rendering
  };
  return (
    <div>
      <h1>USER REGISTREATION....</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="GENDER">GENDER</label>
          <br />
          MALE :{" "}
          <input
            type="radio"
            value="male"
            name="gender"
            {...register("gender")}
          ></input>
          <br />
          FEMALE :{" "}
          <input
            type="radio"
            value="female"
            name="gender"
            {...register("gender")}
          ></input>
        </div>
        <div>
          <label htmlFor="color">FAV COLOR</label>
          <input type="color" {...register("favcolor")}></input>
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>

      {isSubmited && (
        <div style={boxStyle}>
          <h2>USER DATA</h2>
          <p>NAME : {userData.name}</p>
          <p>EMAIL : {userData.email}</p>
          <p>GENDER :{userData.gender}</p>
        </div>
      )}
    </div>
  );
};
