import { useState, useEffect } from "react";
import HotelService from "../../services/hotel.service";
import { useParams } from "react-router-dom";

function HotelInfo() {
  const [hotel, setHotel] = useState({});
  const params = useParams();

  const getHotels = () => {
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

  const handleSubmit = (evt) => {
    //Actualiza la información de este hotel
    evt.preventDefault();
    
};

  const showHotelInfo = () => {
        return (
          <div >
            <h2>{hotel.name}</h2>
            <button className='btn-delete-form' type="button">Borrar</button>
            <form className='form-FormComponent' onSubmit={handleSubmit}>
              <label htmlFor='name-hotel-form'>Nombre:</label>
              <input defaultValue={hotel.name} type='text' id='name-hotel-form' name='name-hotel-form' required/>
              <label htmlFor='img-hotel-form'>Imágen:</label>
              <input defaultValue={hotel.url} type='text' id='img-hotel-form' name='img-hotel-form' required/>
              <label htmlFor='img-hotel-form'>Latitude:</label>
              <input defaultValue={hotel.latitude} type='text' />
              <label htmlFor='img-hotel-form'>Longitude:</label>
              <input defaultValue={hotel.longitude} type='text' />
              <button className='btn-update-form' type='submit'>Actualizar</button>
            </form>
          </div>
        );
  }

  useEffect(() => {
    getHotels();
  }, []);

  return (
    <>
      {showHotelInfo()}
    </>
  );

}

export default HotelInfo;