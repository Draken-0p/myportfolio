
import './Nav.css'
import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServerLine } from 'react-icons/ri'


const Nav = () => {
  const [activeNav,setactiveNav] =useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setactiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome/></a>
      <a href='#about' onClick={()=> setactiveNav('about')} className={activeNav === 'about' ? 'active' : ''}> <AiOutlineUser/></a>
      <a href='#experience' onClick={()=> setactiveNav('experience')} className={activeNav === 'experience' ? 'active' : ''}> <BiBook/></a>
      <a href='#portfolio' onClick={()=> setactiveNav('service')} className={activeNav === 'service' ? 'active' : ''}> <RiServerLine/></a>
     <a href='#contact' onClick={()=> setactiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}> <BiMessageSquareDetail/></a>
      </nav>
  )
}

export default Nav