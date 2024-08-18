import "./FooterStyles.css"
import React from 'react'
import {FaHome,FaPhone,FaMailBulk} from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>
                    <p>UFC Headquater, Las Vegas </p>
                    <p>Nevada, United States.</p>
                </div>

                <div className="phone">
                    <FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>
                    <h4>(702)-221-4781</h4>
                </div>
                <div className="email">
                    <FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>
                    <h4>Support@ufc.tv</h4>
                </div>
            </div>
            <div className="right">
                <h4>
                    About Martial Arts:
                </h4>
                <p>India's ancient martial arts, like Kalaripayattu, are a gift to the world, laying the foundation for many global practices, including those that evolved into modern Asian martial arts. 
                </p>
                <div className="social">

                </div>
            </div>
               
        </div>
        <div className="copyright"> <NavLink to="https://www.instagram.com/jidnyasa121/">© Made by Jidnyasa Gaikwad :)</NavLink> </div>
    </div>
  )
}

export default Footer