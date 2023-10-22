// handleSubmit(cb){

// 	//get.... e,target...
// 	data ={
// 		set..
// 	}

// 	cb(data)



// }

// handleSubit(submitHandler)

import React from 'react'
import { useForm } from 'react-hook-form';

export const StudentReg = () => {

    const {register, handleSubmit} = useForm();
    //register is array of objects
    //handleSubmit is a function

    //data is udf object
    const submitHandler = (data)=>{
        console.log(data);
    }


  return (
    <div>
        <h1>STUDENT REG</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="test" className="form-control"  {...register("name")}/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" {...register("email")}/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" {...register("password")}/>
        </div>
        <div>
            <label htmlFor="phone">Phone</label>
            <input type="text" className="form-control" {...register("phone")}/>
        </div>
        <div>
            <label htmlFor="GENDER">GENDER</label>
            <br/>
            MALE: <input type="radio" value="male" name="gender" {...register("gender")}/>  
            <br/>
            FEMALE: <input type="radio" value="female" name="gender" {...register("gender")}/>  
            <br/>      
        </div>
        <div>
            <label htmlFor="skills">SKILSS</label>
            <br/>
            JAVA: <input type="checkbox" value="java" name="skills" {...register("skills")}/>
            <br/>
            REACT: <input type="checkbox" value="react" name="skills" {...register("skills")}/>
            <br/>
            NODE: <input type="checkbox" value="node" name="skills" {...register("skills")}/>
            <br/>
        </div>
        <div>
            <label htmlFor="country">COUNTRY</label>
            <select className="form-control" {...register("country")}>
                <option value="india">INDIA</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
            </select>
        </div>
        <div>
            <label htmlFor="address">ADDRESS</label>
            <textarea className="form-control" {...register("address")}></textarea>
        </div>
        <div>
            <label>FAV COLOR</label>
            <input type="color" {...register("favColor")}/>
        </div>
        <div>
            <input type="submit" className="btn btn-primary" value="Submit"/>
        </div>
        </form>
    </div>
  )
}
