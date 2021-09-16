import React from 'react'
import './Message.css'

function Message({user, message, timestamp}) {
    return (
        <div className="message">
            <div className="message_info">
                <h4 className="message_info_header"> 
                    {user}{" "}
                    <span className="message_timestamp">
                        {new Date(timestamp?.toDate()).toUTCString}
                    </span>
                </h4>

                <p className="message_info_message">
                    {message}
                </p>
            </div>
        </div>
    )
}

export default Message
