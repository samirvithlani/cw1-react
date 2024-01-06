import React, { useContext } from 'react'
import { AppContext } from '../../context'

export const StudentSubList = () => {
    const {studentsData} = useContext(AppContext)
  return (
    <div>
        <h1>{studentsData[0]?.name}</h1>
    </div>
  )
}
