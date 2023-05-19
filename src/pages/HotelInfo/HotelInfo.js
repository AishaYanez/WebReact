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
    console.log("cargado")
    getHotel();
  }, []);

  const showHotelInfo = () => {
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
      <img src={`/assets/img/${hotel.url}`}/>
    </div>
      {showHotelInfo()}
    </>
  );

}

export default HotelInfo;