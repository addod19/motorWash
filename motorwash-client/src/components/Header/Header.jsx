import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='headerContainer d-flex'>
      <div className='logoContainer'>
          <span>logo</span>
      </div>
      <div className="actionsContainer d-flex">
        <ul className='actionsWrap d-flex'>
            <Link to="/">
              Home
            </Link>
            <li>Services</li>
            <li>Who we are</li>
            <li>Pricing</li>
            <li>Gallery</li>
            <li>Contact</li>
        </ul>
        <ul className='authActions d-flex'>
            <Link to="/users">
              Register
            </Link>
            <Link to="/login">
              Login
            </Link>
        </ul>
      </div>
  </header>;
}

export default Header;
