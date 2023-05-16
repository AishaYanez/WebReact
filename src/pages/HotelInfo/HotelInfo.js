import { useState, useEffect } from "react";
import HotelService from "../../services/hotel.service";
import { useParams } from "react-router-dom";

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

  const removeHotel = () => {
    HotelService.removeHotel(params.id);
  }

  const updateHotel = (updates) => {
    HotelService.updateHotel(params.id, updates)
      .then(() => {
        console.log("Updated SUCCESSFULLY");
      })
      .catch((err) => {
        console.log("Errot updating: ", err);
      })
  }

  const handleSubmit = (evt) => {
    //Actualiza la información de este hotel
    evt.preventDefault();
    const updates = {
      name: evt.target.elements['name-hotel-form'].value,
      url: evt.target.elements['img-hotel-form'].value,
      latitude: evt.target.elements['latitude-hotel-form'].value,
      longitude: evt.target.elements['longitude-hotel-form'].value
    }
    updateHotel(updates);
  };

  const showHotelInfo = () => {
    return (
      <div >
        <h2>{hotel.name}</h2>
        <a href="/explore" className='btn-delete' onClick={removeHotel}>Borrar</a>
        <form className='form-FormComponent' onSubmit={handleSubmit}>
          <label htmlFor='name-hotel-form'>Nombre:</label>
          <input defaultValue={hotel.name} type='text' id='name-hotel-form' name='name-hotel-form' required />
          <label htmlFor='img-hotel-form'>Imágen:</label>
          <input defaultValue={hotel.url} type='text' id='img-hotel-form' name='img-hotel-form' required />
          <label htmlFor='latidude-hotel-form'>Latitude:</label>
          <input defaultValue={hotel.latitude} type='text' name="latitude-hotel-form" required />
          <label htmlFor='-hotel-form'>Longitude:</label>
          <input defaultValue={hotel.longitude} type='text' name="longitude-hotel-form" required />
          <div className='btn-container'>
          <button className='btn-update-form btn-form' type='submit'>Actualizar</button>
          </div>
        </form>
      </div>
    );
  }

  useEffect(() => {
    getHotel();
  }, []);

  return (
    <>
      {showHotelInfo()}
    </>
  );

}

export default HotelInfo;