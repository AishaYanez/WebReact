import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Reserve from './pages/Reserve/Reserve';
import Explore from './pages/Explore/Explore';
import News from './pages/News/News';
import FormAdmin from './pages/FormAdmin/FormAdmin';
import HotelInfo from './pages/HotelInfo/HotelInfo';
import SalesPolitics from './pages/SalesPolitics/SalesPolitics';
import PrivacityPolitics from './pages/PrivacityPolitics/PrivacityPolitics';
import Contact from './pages/Contact/Contact';
import { useState} from 'react';

function App() {
  const [navState, setNavState] = useState('show');

  const changeNavState = () => {
    setNavState(navState === 'show' ? 'hidden' : 'show');
  }

  return (
    <>
    <Header />
    <Navbar changeNavState={changeNavState} />
      <BrowserRouter>
      <div id='main-container' className={navState}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/reserve' element={<Reserve/>} />
          <Route path='/explore' element={<Explore/>} />
          <Route path='/explore/:id' element={<HotelInfo/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/admin' element={<FormAdmin/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/privacity-politics' element={<PrivacityPolitics/>} />
          <Route path='/sales-politics' element={<SalesPolitics/>} />
        </Routes>
      </div>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
