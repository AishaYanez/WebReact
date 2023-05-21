import HotelService from "../../services/hotel.service";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowMap from '../../components/ShowMap/ShowMap';
import './HotelInfo.css';

function HotelInfo() {
  const [hotel, setHotel] = useState({});
  const params = useParams();

  const getHotel = () => {
    HotelService.getHotel(params.id)
      .then((item) => {
        let hotelSelect = {};
        const key = item.key;
        const data = item.val();
        hotelSelect = {
          key: key,
          name: data.name,
          url: data.url,
          latitude: data.latitude,
          longitude: data.longitude
        };
        setHotel(hotelSelect);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getHotel();
  });

  const showMapHotel = () => {
    return (
      <div className="map-container-hotelInfo">
        {hotel.latitude && <ShowMap hotel={hotel} />}
      </div>
    );
  }
  
  return (
    <>
    <div className="information-container">
      <h1>{hotel.name}</h1>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      <img alt="Imagen de hotel" src={`/assets/img/${hotel.url}`}/>
    </div>
      {showMapHotel()}
    </>
  );

}

export default HotelInfo;