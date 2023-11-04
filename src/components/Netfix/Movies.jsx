import React from 'react'
import { Link } from 'react-router-dom'

export const Movies = () => {
    var style = {
        color: "red",
        backgroundColor: "yellow",
    }
  return (
    <div style={style}>
        <h1>MOVIE LIST</h1>
        <ul>
            <li>
                <Link to ="/movie/detail/avangers">AVENGERS</Link>
            </li>
            <li>
                <Link to ="/movie/detail/avatar">Avatar</Link>
            </li>
            <li>
                <Link to ="/movie/detail/1090">1090</Link>
            </li>
        </ul>
    </div>
  )
}
