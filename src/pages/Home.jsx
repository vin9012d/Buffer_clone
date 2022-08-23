import React from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {

    const data = useSelector(store => store)
    console.log(data)
  return (
    <div>Home</div>
  )
}
