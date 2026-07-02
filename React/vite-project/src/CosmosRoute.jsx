import React from 'react'
import Services from './component/Services'
import Contact from './component/Contact'
import About from './component/About'
import Login from './component/Login'
import { Route, Routes } from 'react-router-dom'

const CosmosRoute = () => {
  return (
    <div>
        <Routes>
            <Route path ="/services" element={<Services></Services>}></Route>
            <Route path ="/contact/:id" element={<Contact></Contact>}></Route>{/* This is dynamic route*/}
            <Route path="/about" element={<About></About>}></Route>  {/* This is static route */}
            <Route path="/login" element={<Login></Login>}></Route>

        
        </Routes>
    </div>
  )
}

export default CosmosRoute