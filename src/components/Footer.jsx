import React from 'react'

const Footer = () => {
  return (
    <section>
      <div className="footer-box">
        <div className="nbc-logo-box">
          <img className='nbc-logo' src="src/image/copyright.svg" alt="" />
          <p className='nbc-content'>copyright 2020 | NBC NEWS</p>
        </div>
        <div className="footer-content-box">
          <p className='footer-content'>Privacy Policy</p>
          <p className='footer-content'>Do not sell my personal info</p>
          <p className='footer-content'>Terms of Service</p>
          <p className='footer-content'>nbcnews.com Site Map</p>
        </div>
        <div className="footer-navbar">
          <ul className='footer-ul'>
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Coupons</li>
          </ul>
          <div className="footer-icon-box">
            <img className='footer-icon' src="src/image/Group 257.svg" alt="" />
            <img className='footer-icon' src="src/image/Combined-Shape.svg" alt="" />
            <img className='footer-icon' src="src/image/Group 259.svg" alt="" />
            <img className='footer-icon' src="src/image/Group 260.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer