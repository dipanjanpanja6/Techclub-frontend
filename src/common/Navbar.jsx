import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {FaTimes, FaBars} from 'react-icons/fa';
import {CgLogOut} from 'react-icons/cg';
import {HiUserCircle} from 'react-icons/hi';
import './Navbar.css';

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 997) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const pColor = '#f7fff7';

  //=======Scrolling================

  const changeBackground = () => {
    if(window.scrollY >= 80){
        setNavbar(true);
    }else{
        setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  //=======================

  return (
    <>
      <nav className={navbar ? 'navbar active': 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <h3> GCECT Tech Club</h3>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes color={pColor}/> : <FaBars color={pColor}/> }
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/event' className='nav-links' onClick={closeMobileMenu} >
                Events
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/showcase' className='nav-links' onClick={closeMobileMenu} >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/FAQ' className='nav-links' onClick={closeMobileMenu} >
                FAQ
              </Link>
            </li> 

            {
                (props.auth)?
                <>
                    <li>
                        <Link to='/home' className='nav-links-mobile' onClick={closeMobileMenu} >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to='/auth' className='nav-links-mobile' onClick={props.out && closeMobileMenu} >
                            Logout
                        </Link>
                    </li>
                </>:
                <li>
                    <Link to='/auth' className='nav-links-mobile' onClick={closeMobileMenu} >
                        Login
                    </Link>
                </li>

            }      

          </ul>
          {button &&  !props.auth && <Button buttonStyle='btn--outline'>LOGIN</Button>}
          {button &&  props.auth && <HiUserCircle color={pColor} size={40} /> }
          {button &&  props.auth && <CgLogOut color={pColor} size={40} /> }
        </div>
      </nav>
    </>
  );
}

export default Navbar;