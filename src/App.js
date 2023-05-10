import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Reserve from './pages/Reserve/Reserve';
import Explore from './pages/Explore/Explore';
import HotelInfo from './pages/HotelInfo/HotelInfo';
<<<<<<< HEAD
=======
import SalesPolitics from './pages/SalesPolitics/SalesPolitics';
import PrivacityPolitics from './pages/PrivacityPolitics/PrivacityPolitics';
>>>>>>> 60720fe482d3a7d9fad44213ba570643ab9dae47

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
<<<<<<< HEAD
=======
          <Route path='/privacity-politics' element={<PrivacityPolitics/>} />
          <Route path='/sales-politics' element={<SalesPolitics/>} />
>>>>>>> 60720fe482d3a7d9fad44213ba570643ab9dae47
          <Route path='/explore/information' element={<HotelInfo/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
