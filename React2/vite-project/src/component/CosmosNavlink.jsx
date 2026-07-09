import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './CosmosNavlink.css'

const CosmosNavlink = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="cosmos-nav">
      <div className="nav-brand">Cosmos</div>
      <button
        className="nav-toggle"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink
          to="/product"
          className={({ isActive }) =>
            `nav-link${isActive ? ' active' : ''}`
          }
          onClick={() => setIsOpen(false)}
        >
          Product
        </NavLink>
        <NavLink
          to="/product/create"
          className={({ isActive }) =>
            `nav-link${isActive ? ' active' : ''}`
          }
          onClick={() => setIsOpen(false)}
        >
          Create Product
        </NavLink>
        <NavLink
          to="/user"
          className={({ isActive }) =>
            `nav-link${isActive ? ' active' : ''}`
          }
          onClick={() => setIsOpen(false)}
        >
          User
        </NavLink>
        <NavLink
          to="/user/create"
          className={({ isActive }) =>
            `nav-link${isActive ? ' active' : ''}`
          }
          onClick={() => setIsOpen(false)}
        >
          Create User
        </NavLink>
      </div>
    </nav>
  )
}

export default CosmosNavlink