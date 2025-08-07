import '../styles/footer.scss';

import {
  TwitterIcon,
  FacebookIcon,
  PintrestIcon,
  InstagramIcon,
} from '../assets/svg-images';

const Footer = () => {
  return (
    <div className='footer-div'>
      <div className='footer-container'>
        <a href='/' className='footer-icon'>
          <img src='/static/images/logo_white.svg' alt='Brand Icon' />
        </a>
        <div className='footer-links'>
          <a href='/' className='footer-link header-link'>
            Features
          </a>
          <a href='/' className='footer-link'>
            Link Shortening
          </a>
          <a href='/' className='footer-link'>
            Branded Links
          </a>
          <a href='/' className='footer-link'>
            Analytics
          </a>
        </div>
        <div className='footer-links'>
          <a href='/' className='footer-link header-link'>
            Resources
          </a>
          <a href='/' className='footer-link'>
            Blog
          </a>
          <a href='/' className='footer-link'>
            Developers
          </a>
          <a href='/' className='footer-link'>
            Support
          </a>
        </div>
        <div className='footer-links'>
          <a href='/' className='footer-link header-link'>
            Company
          </a>
          <a href='/' className='footer-link'>
            About
          </a>
          <a href='/' className='footer-link'>
            Our Team
          </a>
          <a href='/' className='footer-link'>
            Careers
          </a>
          <a href='/' className='footer-link'>
            Contact
          </a>
        </div>
        <div className='footer-socials'>
          <a href='/' className='footer-social-link'>
            <FacebookIcon />
          </a>
          <a href='/' className='footer-social-link'>
            <TwitterIcon />
          </a>
          <a href='/' className='footer-social-link'>
            <PintrestIcon />
          </a>
          <a href='/' className='footer-social-link'>
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
