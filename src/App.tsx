import Boost from './components/Boost';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <div className='main-body'>
        <Header />
        <Boost />
        <Footer />
      </div>
    </>
  );
}

export default App;
