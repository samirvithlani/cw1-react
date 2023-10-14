import React from 'react'

export const UsetList = (props) => {
  return (
    <div>UserLIST

        <h1>TITLE = {props.t}</h1>
            
                {
                    //users[i]
                    props?.users?.map((user)=>{
                        return(
                            <ul>
                                <li>{user.id}</li>
                                <li>{user.name}</li>
                                <li>{user.email}</li>
                            </ul>
                        )
                    })
                }
            <button onClick={()=>{props.test("raj")}}>TEST</button>  
    </div>
    
  )
}
