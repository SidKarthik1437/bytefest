import './App.css';
import React from 'react';
import './misc.css'
import Header from './Header'
import Navbar from './Navbar'
import QC from './QC'
import Logo from './Logo'
import acc from './ACC.png'
import Rules from './Rules'
import Announcements from './Announcements'
import Contact from './Contact.js'
import { Ques, Ans } from './Card'

import { Button } from '@material-ui/core';
import { useState } from 'react';



function App() {

  const [tab, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index);
  }

  return (
    <div className="App">
      <Header />
      <div className="landing">
        <Logo />

        {/* <div className="enroll">
          <Button variant="contained" size="large" color="secondary" placeholder="Enroll Now">
            <a href="https://forms.gle/cL62sXgvL1pCiLkSA" className="a">Enroll Now</a>
          </Button>
        </div> */}

        <div className="nav white">
          <div className={tab === 1 ? "about nav-title selected" : "about nav-title"} onClick={() => toggleTab(1)}>
            <h3 className="nt">About</h3>
          </div>
          <div className={tab === 2 ? "announcements nav-title selected" : "announcements nav-title"} onClick={() => toggleTab(2)}>
            <h3 className="nt">Announcements</h3>
          </div>
          <div className={tab === 3 ? "rules nav-title selected" : "rules nav-title"} onClick={() => toggleTab(3)}>
            <h3 className="nt">Rules</h3>
          </div>
          <div className={tab === 4 ? "contact-us nav-title selected" : "contact-us nav-title"} onClick={() => toggleTab(4)}>
            <h3 className="nt">Contact-Us</h3>
          </div>
          
        </div>
      </div>
      {/* <Navbar /> */}

      <div className={tab === 1 ? "About active" : "About disabled"}>
        <h1 className="about-head">ABOUT BYTEFEST</h1>

        <div className="qna">
          <div>
            <Ques Q="What is BYTEFEST?" />
          </div>
          <div>
            <Ans A="BYTEFEST is a beginner-friendly coding competition based on C, focused mainly on creating proactive learning, socializing, and innovative code-space for programmers. It will provide the new batch of students with a practical approach to problem-solving, experimenting, and brainstorming and additionally encourage them to put forth their innovative ideas as versatile code." />
          </div>
        </div>
        <div className="qna">
          <div>
            <Ans A="Our vision is to gather rookie programmers from all branches of the 1st year to collaborate and compete and manifest problem-solving to get comfortable with coding. Not only that, we envision this event to be a great learning platform for beginners and those with a fear of writing code. It would be an opportunity for every participant to learn and develop their problem-solving, logical thinking, teamwork skills." />
          </div>
          <div>
            <Ques Q="Our Vision" />
          </div>
        </div>
        <div className="qna">
          <div>
            <Ques Q="WHY PARTICIPATE?" />
          </div>
          <div>
            <Ans A="BYTEFEST is a platform where participants will not only compete but will enjoy and learn together. In this competitive world, we all know for a fact that it’s not just marks that matter, We need to have strong technical skills too. This event will be the initial step towards creating an interactive community, enabling us to share personal relatedness and support perpetual growth of each other." />
          </div>
        </div>
        <div className="qna">
          <div>
            <Ans A="Registrations for BYTEFEST will be held offline, on campus. Please report to Room No.203-B in short break or lunch break with ₹50 for the same." />
          </div>
          <div>
            <Ques Q="HOW TO ENROLL?" />
          </div>
        </div>
        {/* <QC style="justify" ans1="Be a novice or an expert coder…
          BYTEFEST - 2021 is the right opportunity to showcase your coding abilities and nurture your interest as a coder.
          BYTEFEST – 2021 is beginner friendly coding competition completely based on C. 
          BYTEFEST – 2021 will not only provide the new batch of students a practical approach to problem solving, experimenting and brainstorming, but will also encourage them to put forth their innovative ideas as versatile code. 
          BYTEFEST – 2021 is focused mainly on creating a proactive learning, socializing and innovative code-space for programmers with all levels of expertise. 
          The competition will be of three levels depending on the scores in the qualifying round. 
        "/> */}


      </div>
      <div className={tab === 2 ? "Announcements active" : "Announcements disabled"}>
        <h1 className="about-head">ANNOUNCEMENTS</h1>
        <Announcements />
      </div>
      <div className={tab === 3 ? "Rules active" : "Rules disabled"}>
        <h1 className="about-head">RULES</h1>
        <Rules />
      </div>
      <div className={tab === 4 ? "Contact active" : "Contact disabled"}>
        <Contact />
      </div>

    </div>


  );
}

export default App;
