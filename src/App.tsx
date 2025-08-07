import Boost from './components/Boost';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AdvancedStats from './components/AdvancedStats';

function App() {
  return (
    <>
      <Navigation />
      <div className='main-body'>
        <Header />
        <AdvancedStats />
        <Boost />
        <Footer />
      </div>
    </>
  );
}

export default App;
