import { useState, useEffect } from 'react';
import HotelService from '../../services/hotel.service';
import './FormAdmin.css';

function FormAdmin() {
  const [hotels, setHotels] = useState([]);
  const [hotel, setHotel] = useState({
    key:'',
    name:'',
    url:'',
    latitude:'',
    longitude:''
  });
  const [formState, setFormState] = useState("Insertar");


  //  FUNCION QUE PIDE LA KEY, EL ID Y EL
  //  NOMBRE DE TODOS LOS HOTELES
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

  // FUNCION QUE PIDE TODA LA INFORMACION DE UN HOTEL
  const getHotel = (key) => {
    HotelService.getHotel(key)
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

  const updateHotel = (key, updates) => {
    HotelService.updateHotel(key, updates)
      .then(() => {
        console.log("Updated SUCCESSFULLY");
        getAllHotels();
      })
      .catch((err) => {
        console.log("Error updating: ", err);
      })
  }

  const removeHotel = () => {
    HotelService.removeHotel(hotel.key)
    .then(()=> {
      console.log("Delete SUCCESSFULLY");
      getAllHotels();
      setFormState("Insertar");
      setHotel({
        key:'',
        name:'',
        url:'',
        latitude:'',
        longitude:''
      });
    })
    .catch((err) => {
      console.log("Error deleting: ", err);
    })
  }

  const handleSubmit = (evt) => {
    //Llama al metodo, que se encuentra en este form, para añadir
    //o actualizar los hoteles, dependientdo del estado del formulario
    evt.preventDefault();
    const newDatas = {
      name: evt.target.elements['name-hotel-form'].value,
      url: evt.target.elements['url-hotel-form'].value,
      latitude: evt.target.elements['latitude-hotel-form'].value,
      longitude: evt.target.elements['longitude-hotel-form'].value
    }

    if (formState === "Insertar") {
      addHotel(newDatas);
    } else if (formState === "Actualizar") {
      updateHotel(hotel.key, newDatas);
    }
  };

  const handleHotelSelect = (evt) => {
    //cambia el estado del formulario
    //si no hay hoteles selecionados es INSERT, sino es UPDATE
    if (evt.target.value !== "None"){
      setFormState("Actualizar");
      getHotel(evt.target.value);
    } else {
      setFormState("Insertar");
      setHotel({
        key:'',
        name:'',
        url:'',
        latitude:'',
        longitude:''
      });
    }
  }

  const showHotel = () => {
    return (
      <>
        <div className="hotels-lits-container">
          <select name="hotels-list" id="hotels-list" onChange={handleHotelSelect}>
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
  
  const handleChange = (evt) => {
    const newData = {
      key:hotel.key,
      name: evt.target.parentNode.elements['name-hotel-form'].value,
      url: evt.target.parentNode.elements['url-hotel-form'].value,
      latitude: evt.target.parentNode.elements['latitude-hotel-form'].value,
      longitude: evt.target.parentNode.elements['longitude-hotel-form'].value,
    }
    setHotel(newData);
  }

  useEffect(() => {
    getAllHotels();
  }, []);

  return (
    <>
      {showHotel()}
      <form className='form-FormComponent' onSubmit={handleSubmit}>
        <label htmlFor='name-hotel-form'>Nombre:</label>
        <input value={hotel.name} onChange={handleChange} type='text' id='name-hotel-form' name='name-hotel-form' required />
        <label htmlFor='url-hotel-form'>Imágen:</label>
        <input value={hotel.url} onChange={handleChange} type='text' id='url-hotel-form' name='url-hotel-form' required />
        <label htmlFor='latidude-hotel-form'>Latitude:</label>
        <input value={hotel.latitude} onChange={handleChange} type='text' id='latitude-hotel-form' pattern='^(-?([1-8]?\d(\.\d+)?|90(\.0+)?))$' name="latitude-hotel-form" required />
        <label htmlFor='longitude-hotel-form'>Longitude:</label>
        <input value={hotel.longitude} onChange={handleChange} type='text' id='longitude-hotel-form' pattern='^(-?(1[0-7]|[1-9])?\d(\.\d+)?|180(\.0+)?)$' name="longitude-hotel-form" required />
        <div className='btn-container'>
          <button className='btn-update-form btn-form' type='submit'>{formState}</button>
          {hotel.key && <button onClick={removeHotel} type='button' className='btn-delete-form btn-form' >Borrar</button>}
        </div>
      </form>
    </>
  );
}

export default FormAdmin;