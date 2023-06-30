import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Arrivals from './components/Arrivals';
import Footer from './components/Footer';
import Info from './components/Info';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Arrivals />
    <Info />
    <Footer />

    </>
  );
}

export default App;
