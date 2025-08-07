import '../styles/advancedstats.scss';

const AdvancedStats = () => {
  return (
    <section className='advanced-stats'>
      <div className='stats-header'>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className='stats-cards'>
        <div className='card brand'>
          <img
            src='/static/images/icon-brand-recognition.svg'
            alt='Brand Recognition Icon'
          />
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links
            don&apos;t mean a thing. Branded links help instil confidence in
            your content.
          </p>
        </div>

        <div className='card records'>
          <img
            src='/static/images/icon-detailed-records.svg'
            alt='Detailed Records Icon'
          />
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className='card custom'>
          <img
            src='/static/images/icon-fully-customizable.svg'
            alt='Fully Customizable Icon'
          />
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvancedStats;
