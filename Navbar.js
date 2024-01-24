import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const user=JSON.parse(localStorage.getItem('Mydata'));
  const navigate=useNavigate()
  const handleAbout=()=>{
    navigate("/AboutUs")
  }
  const handleContact=()=>{
    navigate("/ContactUs")
  }
  return (
    <div className="navbar">
        <div className="navContainer container">
            <span className="logo">Roombooking</span>
            <div className="navItems">
                <button className="navButton" onClick={handleAbout}>About Us</button>
                <button className="navButton" onClick={handleContact}>Contact Us</button>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar;