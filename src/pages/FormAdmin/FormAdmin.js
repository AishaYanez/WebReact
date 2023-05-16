import { useState, useEffect } from 'react';
import HotelService from '../../services/hotel.service';
import './FormAdmin.css';

function FormAdmin() {
  const [hotels, setHotels] = useState([]);
  const [hotel, setHotel] = useState({});
  const [formState, setFormState] = useState("INSERT");
  //Clave que identifica al hotel selecionado.
  //Usada para solicitar la información para el FORM y para poder ¿Borrarla?
  const [keyHotel, setKeyHotel] = useState("");

  const getAllHotels = () => {
    HotelService.getAllHotels()
      .then((items) => {
        let allHotels = [];
        items.forEach(item => {
          const key = item.key;
          const data = item.val();
          allHotels.push({
            key: key,
            id: data.id,
            name: data.name
          });
        });
        setHotels([...allHotels]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const getHotel = () => {
    HotelService.getHotel(keyHotel)
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

  const addHotel = (addates) => {
    HotelService.addHotel(addates)
      .then(() => {
        console.log("Added SUCCESSFULLY");
        getAllHotels();
      })
      .catch((err) => {
        console.log("Errot addedting: ", err);
      })
  }

  const updateHotel = (updates, key) => {
    HotelService.updateHotel(key, updates)
      .then(() => {
        console.log("Updated SUCCESSFULLY");
      })
      .catch((err) => {
        console.log("Errot updating: ", err);
      })
  }

  const handleSubmit = (evt) => {
    //Llama al metodo, que se encuentra en este form, para añadir
    //o actualizar los hoteles, dependientdo del estado del formulario
    evt.preventDefault();
    const newDatas = {
      name: evt.target.elements['name-hotel-form'].value,
      url: evt.target.elements['img-hotel-form'].value,
      latitude: evt.target.elements['latitude-hotel-form'].value,
      longitude: evt.target.elements['longitude-hotel-form'].value
    }

    if (formState === "INSERT") {
      addHotel(newDatas);
    } else if (formState === "UPDATE") {
      updateHotel(newDatas);
    }
  };

  const formStateChange = (evt) => {
    //cambia el estado del formulario
    //si no hay hoteles selecionados es INSERT, sino es UPDATE
    setKeyHotel(evt.target.value);
    console.log(evt.target.value)
    setFormState("INSERT");
    if (evt.target.value != "None") {
      setFormState("UPDATE");
      getHotel();
    }
  }

  const showHotel = () => {
    return (
      <>
        <div className="hotels-lits-container">
          <select name="hotels-list" id="hotels-list" onChange={formStateChange}>
            <option value="None"></option>
            {hotels.map(h => {
              return (
                <option key={h.key} value={h.key}>Id:{h.id} Nombre:{h.name}</option>
              );
            })}
          </select>
        </div>
      </>
    );
  }

  useEffect(() => {
    getAllHotels();
  }, []);

  return (
    <>
      {showHotel()}
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
          <button className='btn-update-form btn-form' type='submit'>{formState}</button>
        </div>
      </form>
    </>
  );
}

export default FormAdmin;