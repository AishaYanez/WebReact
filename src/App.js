import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Reserve from './pages/Reserve/Reserve';
import Explore from './pages/Explore/Explore';
import HotelInfo from './pages/HotelInfo/HotelInfo';
import SalesPolitics from './pages/SalesPolitics/SalesPolitics';
import PrivacityPolitics from './pages/PrivacityPolitics/PrivacityPolitics';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
    <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/reserve' element={<Reserve/>} />
          <Route path='/explore' element={<Explore/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/privacity-politics' element={<PrivacityPolitics/>} />
          <Route path='/sales-politics' element={<SalesPolitics/>} />
          <Route path='/explore/information' element={<HotelInfo/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
