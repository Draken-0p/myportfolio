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
              <small>years working</small>
            </article>

            <article className="about__card">
              <BsAward />
              <h5>Experience</h5>
              <small>years working</small>
            </article>
            <article className="about__card">
              <BsAward />
              <h5>Experience</h5>
              <small>years working</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minus praesentium fuga rerum iusto repudiandae ullam eveniet, quod natus assumenda tempore ex suscipit quibusdam adipisci officiis? Eaque sit corporis asperiores?
          </p>
           <a href='#contact' className='btn btn-primary'> Let's talk</a>
        </div>
      </div>
    </section>
  );
}

export default About