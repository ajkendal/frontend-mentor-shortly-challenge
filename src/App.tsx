import Boost from './components/Boost';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <div className='main-body'>
        <Header />
        <Boost />
      </div>
    </>
  );
}

export default App;
