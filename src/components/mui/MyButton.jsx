import { Button } from '@mui/material'
import React from 'react'


export const MyButton = (props) => {
  return (
    <Button variant='contained' type={props.type}>{props.name}</Button>
  )
}
