import React, { useContext } from 'react'
import { AppContext } from '../../context'

export const Series = () => {
  const {title} = useContext(AppContext)
    var style = {
        color: "red",
        backgroundColor: "yellow",
    }
  return (
    <div style={style}>
        <h1>SERIES COMPONENT</h1>
        title = {title}
    </div>
  )
}
