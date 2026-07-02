import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const CosmosLink = () => {
    let navigate=useNavigate()//for button click
  return (
    <div>
        <NavLink to="/about" className="navlink">About</NavLink>
        <NavLink to ="/contact" className="navlink">Contact</NavLink>
        <NavLink to="services" className="navlink">Services</NavLink>
        <button className='navlink' onClick={()=>{
            navigate("/login")
        }}>Login</button>
    </div>
  )
}

export default CosmosLink