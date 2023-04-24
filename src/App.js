import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
// import Logo from './logo.svg';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
      {/* <img src={Logo} alt="Logo"/> */}
    </>
  );
}

export default App;
