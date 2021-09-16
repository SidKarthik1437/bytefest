import React from 'react'
import {Button} from '@material-ui/core'
import './Contact.css'

function Contact() {
    return (
        <div className="contact">
            <h1 className="contact_header">Contact Us for any queries regarding the event, registration etc.</h1>
            <h3 className="contact_id">
                Sid Karthik = &nbsp;
                 <a href="tel:+91 9108287982">
                    <Button variant="contained" color="primary">
                        Call
                    </Button>
                </a>
            </h3>
            <h3 className="contact_id">
                Sathwik = &nbsp;
                 <a href="tel:+91 8197301603">
                    <Button variant="contained" color="primary">
                        Call
                    </Button>
                </a>
            </h3>
        </div>
    )
}

export default Contact
