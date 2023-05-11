import { useState, useEffect } from "react";
import HotelService from "../../services/hotel.service";
import { useParams } from "react-router-dom";

function HotelInfo() {
  const [hotels, setHotels] = useState([]);
  const params = useParams();

  const getHotels = () => {
    const allHotels = HotelService.getHotels();
    setHotels(allHotels);
  }

  const handleSubmit = (evt) => {
    //Actualiza la información de este hotel
    evt.preventDefault();
    
};

  const showHotelInfo = () => {
    return (
      hotels.filter(h => h.id == params.id).map(info => {
        return (
          <div >
            <h2>{info.name}</h2>
            <button className='btn-delete-form' type="button">Borrar</button>
            <form className='form-FormComponent' onSubmit={handleSubmit}>
              <label htmlFor='name-hotel-form'>Nombre:</label>
              <input value={info.name} type='text' id='name-hotel-form' name='name-hotel-form' required />
              <label htmlFor='img-hotel-form'>Imágen:</label>
              <input value={info.url} type='text' />
              <label htmlFor='img-hotel-form'>Imágen:</label>
              <input value={info.latitude} type='text' />
              <label htmlFor='img-hotel-form'>Imágen:</label>
              <input value={info.longitude} type='text' />
              <button className='btn-update-form' type='submit'>Actualizar</button>
            </form>
          </div>
        );
      })
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