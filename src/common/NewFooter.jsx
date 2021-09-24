import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"
import { Instagram, YouTube, Twitter, LinkedIn, Fingerprint } from "@material-ui/icons"
import Facebook from "@material-ui/icons/Facebook"

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h4>Quick Links</h4>
            <Link rel="noreferrer" target="_blank" href="http://gcect.ac.in">
              Academic Calender
            </Link>
            <Link rel="noreferrer" target="_blank" href="http://gcect.ac.in">
              Central Library
            </Link>
            <Link rel="noreferrer" target="_blank" href="http://gcect.ac.in">
              Internal Website
            </Link>
          </div>
          <div className="footer-link-items">
            <h4>Events</h4>
            <Link to="/event/coding">Coding challenge</Link>
            <Link to="/required">Require Class B member</Link>
            <Link to="/showcase">Showcase</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h4>Get Helped</h4>
            <Link to="/privacy">Accessibility</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/feedback">Get Helped with this Website</Link>
            <Link to="/feedback">Send Website Corrections</Link>
          </div>
          <div className="footer-link-items">
            <h4>Social Media</h4>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">YouTube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <Fingerprint className="navbar-icon" />
              GCECT Tech Club
            </Link>
          </div>
          <small className="website-rights">GCECT Tech Club © 2021</small>
          <div className="social-icons">
            <Link to="/" target="_blank" aria-label="Facebook">
              <Facebook />
            </Link>
            <Link to="//www.instagram.com/" target="_blank" aria-label="Instagram">
              <Instagram />
            </Link>
            <Link to={"//www.youtube.com/channel/"} target="_blank" aria-label="YouTube">
              <YouTube />
            </Link>
            <Link to="/" target="_blank" aria-label="Twitter">
              <Twitter />
            </Link>
            <Link to="//www.linkedin.com/in/" target="_blank" aria-label="LinkedIn">
              <LinkedIn />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
