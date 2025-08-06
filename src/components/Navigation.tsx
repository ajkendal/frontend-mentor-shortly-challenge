import '../styles/navigation.scss';

import { useState } from 'react';

import { HamburgerIcon } from '../assets/svg-images';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className='navigation'>
      <div className='white-bg'>
        <div className='desktop-nav '>
          <div className='links'>
            <a href='/' className='link'>
              <img src='/static/images/logo.svg' alt='Company Logo' />
            </a>
            <a href='/' className='link'>
              Features
            </a>
            <a href='/' className='link'>
              Pricing
            </a>
            <a href='/' className='link'>
              Resources
            </a>
          </div>
          <div className='login-links'>
            <a href='/' className='link login'>
              Login
            </a>
            <a href='/' className='link signup'>
              <button className='small radius'>Sign Up</button>
            </a>
          </div>
        </div>

        <div className='mobile-nav'>
          <a href='/' className='link'>
            <img src='/static/images/logo.svg' alt='Company Logo' />
          </a>
          <div className='ham-icon' onClick={() => toggleMobileMenu()}>
            <HamburgerIcon />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='mobile-menu'>
          <a href='/' className='link'>
            Features
          </a>
          <a href='/' className='link'>
            Pricing
          </a>
          <a href='/' className='link'>
            Resources
          </a>
          <hr />
          <a href='/' className='link '>
            Login
          </a>
          <a href='/' className='signup '>
            <button className='small radius'>Sign Up</button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
