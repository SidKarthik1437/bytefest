import React, { useEffect, useState } from 'react'
import './Announcements.css'
import db from './firebase'
import Message from './Message'

function Announcements() {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        db
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => (
            setMessages(snapshot.docs.map((doc) => doc.data()))
        ))
        setMessages([...messages])
    }, [])

    console.log(messages);
    return (
        <div className="announcements">
            <div className="card">
              {messages.map(({user, message, timestamp}) => (
                  <Message 
                  user={user}
                  message={message}
                  timestamp={timestamp}
                  />
              ))}

            </div>
        </div>
    )
}

export default Announcements
