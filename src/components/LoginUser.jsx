import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

export const LoginUser = () => {
    const {register, handleSubmit} = useForm();
    const submitHandler = async(data) => {

        try{
        const res = await axios.post('http://localhost:3001/user/login', data);
        console.log(res);
        console.log(res.data);
        
        localStorage.setItem('token', res.data.data);

        }catch(err){
            console.log(err);
        }
        
    }
  return (
    <div><h1>LOGIN USER </h1>
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" {...register("email")} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" {...register("password")} />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    </div>
  )
}
