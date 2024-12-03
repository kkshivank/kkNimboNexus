import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <div className="f-container">
        <div className="our-expertise">
          <h2 style={{fontSize: '22px'}}>Our Expertise</h2>
          <a href=""><p>Sales Cloud</p></a>
          <a href=""><p>Service Cloud</p></a>
          <a href=""><p>Experience Cloud</p></a>
          <a href=""><p>Omni studio</p></a>
        </div>
        <div className="f-motive">
          {/* <h2>Company</h2> */}
          <a href="/"><p>Home</p></a>
          <a href="#about"><p>About Us</p></a>
          <a href="/services"><p>Services</p></a>
          <a href="#contact"><p>Contact Us</p></a>
        </div>
        <div className="f-contact">
          <img src="./public/images/Cloud.svg" alt="" />
          <h2 style={{fontSize: '22px'}}>INDIA</h2>
          <h4>+91-7976066296</h4>
          <p>contact@nimbonexus.com</p>
          <div className="socials">
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
      </div>
      <hr />
      <p>&copy; 2024 NimboNexus. All rights reserved.</p>
    </footer>
  )
}
