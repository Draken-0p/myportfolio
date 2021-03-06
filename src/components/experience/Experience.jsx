import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './Experience.css'
function Experience() {
  return (
  <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__detaile'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>  <h4>HTML</h4>
            <small className='text-light'> Intermediate </small></div>
          
          </article>
          <article className='experience__detaile'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>    <h4>CSS</h4>
            <small className='text-light'> Ixperienced</small></div>
        
          </article>
          <article className='experience__detaile'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>   <h4>React</h4>
            <small className='text-light'> Intermediate </small></div>
         
          </article>
          <article className='experience__detaile'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div> <h4>Javascript</h4>
            <small className='text-light'> Intermediate </small></div>
           
          </article>
           <article className='experience__detaile'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>     <h4>Bootstrap</h4>
            <small className='text-light'> Intermediate </small></div>
       
          </article>
        </div>
      </div>
       <div className="experience__backend">
         <h3>Backend experience</h3>
         <div className="experience__content">
          <article className='experience__detaile'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>        <h4>Node.js</h4>
            <small className='text-light'> Intermediate</small></div>
    
          </article>
          <article className='experience__detaile'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>        <h4>Express</h4>
            <small className='text-light'> Intermediate</small></div>
    
          </article>
          <article className='experience__detaile'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>   <h4>MongoDb</h4>
            <small className='text-light'> Intermediate</small></div>
         
          </article>
          <article className='experience__detaile'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>   <h4>Mysql</h4>
            <small className='text-light'> Intermediate</small></div>
         
          </article>
   
        </div>
          
        </div>
    </div>

  </section>  
  )
}

export default Experience