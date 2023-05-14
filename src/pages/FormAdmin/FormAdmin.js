import HotelService from "../../services/hotel.service";

const addHotel = (addates) => {
  HotelService.addHotel(addates)
    .then(() => {
      console.log("Added SUCCESSFULLY");
    })
    .catch((err) => {
      console.log("Errot addedting: ", err);
    })
}

const handleSubmit = (evt) => {
  //Llama al metodo, que se encuentra en este form, para añadir nuevos hoteles.
  evt.preventDefault();
  const addates = {
    name: evt.target.elements['name-hotel-form'].value,
    url: evt.target.elements['img-hotel-form'].value,
    latitude: evt.target.elements['latitude-hotel-form'].value,
    longitude: evt.target.elements['longitude-hotel-form'].value
  }
  addHotel(addates);
};

function FormAdmin() {
  return (
    <>
     <form className='form-FormComponent' onSubmit={handleSubmit}>
          <label htmlFor='name-hotel-form'>Nombre:</label>
          <input type='text' id='name-hotel-form' name='name-hotel-form' required />
          <label htmlFor='img-hotel-form'>Imágen:</label>
          <input type='text' id='img-hotel-form' name='img-hotel-form' required />
          <label htmlFor='latidude-hotel-form'>Latitude:</label>
          <input type='text' name="latitude-hotel-form" required />
          <label htmlFor='-hotel-form'>Longitude:</label>
          <input type='text' name="longitude-hotel-form" required />
          <div className='btn-container'>
          <button className='btn-update-form btn-form' type='submit'>Añadir</button>
          </div>
        </form>
    </>
  );
}

export default FormAdmin;