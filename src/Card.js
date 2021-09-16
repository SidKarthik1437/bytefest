import React from 'react'
import './Card.css'

function Ques({Q}) {
    return (
        <div className="ques">
           <div className="qtext">
                <h1>{Q}</h1>
           </div>
            
        </div>
    )
}

function Ans({A}) {
    return (
        <div className="ans">
            <div className="qtext">
                <h3>{A}</h3>
            </div>
        </div>
    )
}

export {Ques, Ans}
