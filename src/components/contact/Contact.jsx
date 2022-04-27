import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'

function Contact() {
  return (
    <section id='contact'>
      <h5>
        Get In Touch
      </h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>shrey.@gami</h5>
            <a href='mailto:shrey.super9440@gmail.com'>secd</a>
          </article>
          <article className='contact__option'>
            <MdOutlineEmail/>
            <h4>Linkedin</h4>
            <h5>shrey jain</h5>
            <a href=''>secd</a>
          </article>
          <article className='contact__option'>
            <MdOutlineEmail/>
            <h4>whatsap</h4>
            <h5>7869380160</h5>
            <a href='https://api.whatsapp.com/send?phone=+917869380160'>secd</a>
          </article>
        </div>

        <form action=''>
          <input type='text' name='name' placeholder='your name'/>
          <input type='email' name='email' placeholder='your email'/>
          <textarea name='message' rows='7' placeholder='your message'></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact