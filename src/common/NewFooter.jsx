import React from "react"
import "./Footer.css"
import { Link as RouterLink } from "react-router-dom"
import { Link } from "@material-ui/core";
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
            <Link component={RouterLink} to="/event/coding">Coding challenge</Link>
            <Link to="/required" component={RouterLink} >Require Class B member</Link>
            <Link to="/showcase" component={RouterLink} >Showcase</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h4>Get Helped</h4>
            <Link component={RouterLink} to="/privacy">Accessibility</Link>
            <Link component={RouterLink} to="/privacy">Privacy Policy</Link>
            <Link component={RouterLink} to="/feedback">Get Helped with this Website</Link>
            <Link component={RouterLink} to="/feedback">Send Website Corrections</Link>
          </div>
          <div className="footer-link-items">
            <h4>Social Media</h4>
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">YouTube</Link>
            <Link href="#">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
<<<<<<< HEAD
          <div className="footer-logo"></div>
          <small className="website-rights">Bytemonk-GCECT Tech Club © 2021</small>
=======
          <div className="footer-logo">
            <Link color="inherit" component={RouterLink} to="/" className="social-logo">
              <Fingerprint className="navbar-icon" />
              ByteMonk-GTC
            </Link>
          </div>
          <small className="website-rights">
            Made with ❤️ by {" "}
            <Link color="inherit" href="https://www.linkedin.com/in/dipanjanpanja6/" target="_blank">Dipanjan Panja (CSE-21) </Link>
             & <Link color="inherit" target="_blank" href="https://www.linkedin.com/in/00-ayush-jha/">Ayush Jha (CSE-23)</Link>
          </small>
>>>>>>> 382df4b76cd1519b0297c4fcb08a3974f039dda2
          <div className="social-icons">
            <Link color="inherit" href="#" target="_blank" aria-label="Facebook">
              <Facebook />
            </Link>
            <Link color="inherit" href="//www.instagram.com/" target="_blank" aria-label="Instagram">
              <Instagram />
            </Link>
            <Link color="inherit" href={"//www.youtube.com/channel/"} target="_blank" aria-label="YouTube">
              <YouTube />
            </Link>
            <Link color="inherit" href="/" target="_blank" aria-label="Twitter">
              <Twitter />
            </Link>
            <Link color="inherit" href="//www.linkedin.com/in/" target="_blank" aria-label="LinkedIn">
              <LinkedIn />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
