import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import './Footer.css'
function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'> shrey</a>
      <ul className='parmalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Porjects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href=''><AiFillLinkedin/></a>
        <a href=''><BsInstagram/></a>
        <a href=''><BsGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ShreyJain. All rights reserved.</small></div> 

    </footer>
  )
}

export default Footer