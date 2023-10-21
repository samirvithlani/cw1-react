import React, { useState } from "react";

export const EmployeeForm = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [city, setcity] = useState("")
    const [gender, setgender] = useState("")

    const namHandler = (e) => {

        //console.log(e);
        //console.log(e.target.value);
        setname(e.target.value);

        

    }

    const boxStyle = {
        border: "1px solid black",
        padding: "20px",
        margin: "10px",
        width: "600px",
        height: "300px",
        display: "inline-block",
        verticalAlign: "top"

    }
    const submitHandeler = (e) => {

        e.preventDefault();
        console.log("Form Submitted");
        console.log(name);
        console.log(email);
        console.log(city);
    }
  return (
    <div>
      <h1>EmployeeForm</h1>
      <div style={boxStyle}>
      <form onSubmit={(event)=>{submitHandeler(event)}}>
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Enter Full Name" 
            onChange={(e)=>{namHandler(e)}} />
            {name}
        </div>
        <div>
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter Email" 
            onChange={(e)=>{setemail(e.target.value)}}/>
            {email}
        </div>
        <div>
            <label>City</label>
            <input type="text" className="form-control" placeholder="Enter City" 
            onChange={(e)=>{setcity(e.target.value)}}/>
            {city}
        </div>
        <div>
            <label>GENDER</label>
            <br/>
            MALE :<input type="radio" value="male" name="gender" onChange={(e)=>{setgender(e.target.value)}}></input>
            FEMALE :<input type="radio" value="female" name="gender" onChange={(e)=>{setgender(e.target.value)}}></input>
        </div>
        <div>
            <input type="submit" className="btn btn-primary" value="Submit" /> 
        </div>
      </form>
      </div>
      <div style={boxStyle}>
        <h1>
            Name : {name}
        </h1>
        <h1>
            Email : {email}
        </h1>
        <h1>
            City : {city}
        </h1>
        <h1>
            GENDER:{gender}
        </h1>
      </div>
    </div>
  );
};
