import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContent } from '../redux/ContentSlice'

export const ContentComponent = () => {

    const dispatch = useDispatch()
    const pending = useSelector((state) => state.content.pending)
    const content = useSelector((state) => state.content.content)
    const error = useSelector((state) => state.content.error)
    useEffect(() => {
      
        dispatch(fetchContent())
      
    }, [])
    
  return (
    <div>
        {
            pending && <h1>Loading...</h1>
        }
    </div>
  )
}
