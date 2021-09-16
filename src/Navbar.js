import React from 'react'
import './Navbar.css'
import { Button } from '@material-ui/core';

import logo from './BYTEFEST.png'

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav_logo">
                <img src={logo} alt=""/>
            </div>
           <div className="nav_header">
                <Button className="navbar_header">
                    Announcements
                </Button>
                <Button className="navbar_header">
                    Contact Us
                </Button>
                <Button className="navbar_header">
                    Rules
                </Button>
           </div>

        </div>
    )
}

export default Navbar
