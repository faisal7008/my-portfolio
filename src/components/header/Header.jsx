import React from 'react'
import './header.css'
import CTA from './CTA'
import Socials from './Socials'
import {BsArrowDownCircleFill} from 'react-icons/bs'
import ME from "../../assets/faisal-pic-new.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Faisal Hussain</h1>
        <div className="text-light">Fullstack Developer</div>
        <CTA/>
        <div className='me'>
            <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll__down'> <BsArrowDownCircleFill/> </a>
        <Socials/>
      </div>
    </header>
  )
}

export default Header