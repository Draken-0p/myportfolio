import React from 'react'
import { BsAward } from 'react-icons/bs'
import Me from '../../assets/web.png'
import './About.css'

function About() {
  return (
    <section id="about">
      <h5>get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className="about__card">
              <BsAward />
              <h5>Project</h5>
              <small>5+ MERN-Stack projects</small>
            </article>
            
          </div>
          <br/>
          <p>
          I am studying Computer Science at Shri Shankaracharya Engineering College.I love exploring new tech and to see how they'd perfrom .Earlier I used to make static websites as a hobby and as I gained experience,I started making dynamic websites.

            I love going out with my friends and when I am free, I play Games especially BGMI and Call Of duty Warzone.
          </p>
          <br/>
           <a href='#contact' className='btn btn-primary'> Let's talk</a>
        </div>
      </div>
    </section>
  );
}

export default About