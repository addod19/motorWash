import React from 'react';
import './Header.css';

const Header = () => {
  return <header className='headerContainer d-flex'>
      <div className='logoContainer'>
          <span>logo</span>
      </div>
      <div className="actionsContainer d-flex">
        <ul className='actionsWrap d-flex'>
            <li>Home</li>
            <li>Services</li>
            <li>Who we are</li>
            <li>Pricing</li>
            <li>Gallery</li>
            <li>Contact</li>
        </ul>
        <ul className='authActions d-flex'>
            <li>Register</li>
            <li>Login</li>
        </ul>
      </div>
  </header>;
}

export default Header;
