import React from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
    var name = useParams().name
  return (
    <div>
        <h1>DEtAIL OF MOVIE == {name}</h1>
    </div>
  )
}
