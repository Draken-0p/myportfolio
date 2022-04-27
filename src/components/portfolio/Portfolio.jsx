import React from 'react'
import './Portfolio.css'
import Img1 from '../../assets/ss1.png'
import Img2 from '../../assets/ss2.png'
function Portfolio() {

const data = [
  {
    id: 1,
    image: Img1,
    title: 'Wallpaper-app',
    github: 'https://github.com/Draken-0p/chat-app-react-nodejs', 
    demo: 'kjbjb',
  },
  {
  id: 2,
  image: Img2,
  title: 'Chatify',
  github: 'https://github.com/Draken-0p/wallpaper_app', 
  demo: 'kljbjkb',

 }];

  return (
  <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Projects</h2>
    <div className="container portfolio__container">
      {
        data?.map((data) => {
          return(
          <article key={data.id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={data.image} alt={data.title}/>
            </div>
            <h3>{data.title}</h3>
            <div className="protfolio__item-cta">
              <a href={data.github} className='btn' target='_blank'>Github</a>
              <a href={data.demo} className='btn btn-primary' target='_blank'>Live</a>
            </div>
          </article>)
        })
      } 
    </div>
  </section>
  )
}

export default Portfolio