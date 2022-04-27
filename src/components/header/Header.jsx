import React from 'react'
import CTA from './CTA'
import './Header.css'
import Me1 from '../../assets/ss2.jpg'
import { HeaderSocial } from './HeaderSocial';


const Header = () => {

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shrey Jain</h1>
        <h5>FullStack Devloper</h5>
          <CTA/>
          <HeaderSocial/>

    <div className="me">
      <img src={Me1} alt='me'/>
    </div>

      <a href='#contact' className='scroll__down'>scroll down</a>
      </div>
    </header>
  )
}

export default Header

