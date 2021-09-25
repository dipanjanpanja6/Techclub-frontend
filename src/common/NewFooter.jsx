import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa"
import { MdFingerprint } from "react-icons/md"

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
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <MdFingerprint className="navbar-icon" />
              GCECT Tech Club
            </Link>
          </div>
          <small className="website-rights">GCECT Tech Club © 2020</small>
          <div className="social-icons">
            <Link className="social-icon-link" to="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </Link>
            <Link className="social-icon-link" to="//www.instagram.com/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </Link>
            <Link className="social-icon-link" to={"//www.youtube.com/channel/"} target="_blank" aria-label="Youtube">
              <FaYoutube />
            </Link>
            <Link className="social-icon-link" to="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </Link>
            <Link className="social-icon-link" to="//www.linkedin.com/in/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
