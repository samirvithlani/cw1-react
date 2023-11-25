import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export const PostApiDemo2 = () => {
    const {register,handleSubmit,formState:{errors},reset} = useForm();
    const [loading, setloading] = useState(false)
    const [buttondisable, setbuttondisable] = useState(false)
    

    const submitHandler = (data) => {

        //console.log(data);
        var userObj = {
            name:data.name,
            email:data.email,
            age:parseInt(data.age),
            password:data.password
        }
        setloading(true)
        setbuttondisable(true)
        axios.post("http://localhost:3001/user/user",userObj).then((res) => {
            console.log(res);
            console.log(res.data);
            alert("user added successfully");
            setloading(false)
            reset();
            setbuttondisable(false)
          
        }).catch((err) => {
            console.log(err);
            alert("user not added");
            setloading(false)
            reset();    
            setbuttondisable(false)
        })
        //clear form data after submit
        
        
        
    }

  return (
    <div>
        <h1>POST REQUEST WITH FORM</h1>
        {
            loading == true ? <h1>Sending request...</h1> : null
        }
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type="text" {...register("name")} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" {...register("email")} />
            </div>
            <div>
                <label>Age</label>
                <input type="text" {...register("age")} />
            </div>
            <div>
                <label>Password</label>
                <input type="text" {...register("password")} />
            </div>
            <div>
                <input disabled={buttondisable} type="submit"  value="add"/>
            </div>
        </form>
    </div>
  )
}
