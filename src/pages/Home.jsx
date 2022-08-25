import React from 'react'
import { useSelector } from 'react-redux'
import { Footer } from '../components/Footer'
import HomeMain from '../components/HomeMain'
import { Navbar } from '../components/Navbar'

export const Home = () => {

    const data = useSelector(store => store)
    console.log(data)
  return (
    <>
    {/* <Navbar/> */}
    <HomeMain/>
    <Footer/>
    </>
  )
}
