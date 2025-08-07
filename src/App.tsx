import Boost from './components/Boost';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AdvancedStats from './components/AdvancedStats';
import ShortenApi from './components/ShortenApi';

function App() {
  return (
    <>
      <Navigation />
      <div className='main-body'>
        <Header />
        <ShortenApi />
        <AdvancedStats />
        <Boost />
        <Footer />
      </div>
    </>
  );
}

export default App;
