import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Reserve from './pages/Reserve/Reserve';
import Explore from './pages/Explore/Explore';
import HotelInfo from './pages/HotelInfo/HotelInfo';

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
          <Route path='/explore/information' element={<HotelInfo/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
