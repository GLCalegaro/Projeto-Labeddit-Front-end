import React from 'react'
import './footer.css';
import {BsBalloonHeartFill} from 'react-icons/bs/'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className="footer__copyright">Copyright {year} developed by Giovanna Calegaro  <BsBalloonHeartFill style={{height: "20px", color: 'red'}} /></footer>
  )
}

export default Footer