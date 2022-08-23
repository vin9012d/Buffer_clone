import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from './About'
import { Addcannel } from './Addcannel'
import { Analytics } from './Analytics'
import { Channels } from './Channels'
import { Customer } from './Customer'
import { Engagement } from './Engagement'
import { Home } from './Home'
import { Login } from './Login'
import { Pricing } from './Pricing'
import { Publishing } from './Publishing'

export const Mainroute = () => {
  return (
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/channels/addchannel" element={<Addcannel />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/publishing" element={<Publishing />} />
          
    </Routes>
  )
}
