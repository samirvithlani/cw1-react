import React from 'react'
import { UsetList } from './UsetList'

export const Users = (props) => {

    var users =[
        {
            id:1,
            name:'John',
            email:"jhon@gmail.com"
        },
        {
            id:2,
            name:'Smith',
            email:"smith@gmail.com"
        }
    ]

    function test(name){

        alert(name)
    }

  return (
    <div className='App'>
        <h1>USERS</h1>
        <h2>{props.t}</h2>
        {/* <button onClick={()=>{test()}}>TEST</button> */}
        <UsetList t = {props.t} users = {users} test ={test}/>
    </div>
  )
}
