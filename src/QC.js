import React from 'react'
import './QC.css'

function QC({ans1, ans2}) {
    return (
        <div className="qcard">
            <div className="card left">
              <p className="answer">{ans1}</p>
            </div>
            {/* <div className="card right">
              <p className="answer">{ans2}</p>
            </div> */}
        </div>
    )
}

export default QC
