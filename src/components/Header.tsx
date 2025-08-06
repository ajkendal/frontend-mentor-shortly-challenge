import '../styles/header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header-text item'>
          <h1>More than just shorter links</h1>
          <p className='header-subtext'>
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>
          <button className='radius'>Get Started</button>
        </div>
        <div className='image item'>
          <img
            src='/static/images/illustration-working.svg'
            alt='Working Illustration'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
