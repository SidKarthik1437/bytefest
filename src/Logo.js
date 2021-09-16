import React from 'react'
import './misc.css'
import logo from './BYTEFEST.png'
import { Button } from '@material-ui/core';
import acc from './ACC.png'

function Logo() {
    return (
        <div className="logo">
            <img src={logo}/>
            <div className="tagline">
                <img src={acc} />
            </div>
        </div>
    )
}

export default Logo
