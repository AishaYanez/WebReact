// import React, { useState } from 'react';
import { useState } from 'react';
import './FormReserve.css'

function FormReserve() {
    const [userDatas, setUserDatas] = useState({});
    // const [name, setName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [DNI, setDNI] = useState("");
    // const [departureDate, setDepartureDate] = useState("");
    // const [returnDate, setReturnDate] = useState("");
    // const [formDataArray, setFormDataArry] = useState([]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // const formData = { name, lastName, DNI, departureDate, returnDate };
        // setFormDataArry(...formDataArray, formData);
    };

    return (
        <>
            <form className='form-FormComponent' onSubmit={handleSubmit}>
                <label htmlFor='nameForm'>Nombre:</label>
                <input placeholder='Introuduce tu nombre' type='text' id='nameForm' name='nameForm' required />
                <label htmlFor='lastNameForm'>Apellido:</label>
                <input placeholder='Introduce tu apellido' type='text' id='lastNameForm' name='lastNameForm' required />
                <label htmlFor='dniForm'>DNI:</label>
                <input placeholder='Introduce tu número de identificación' type='text' id='dniForm' name='dniForm' required />
                <label htmlFor='departureDateForm'>Fecha de salida:</label>
                <input placeholder='Introduce la fecha de salida' type='date' id='departureDateForm' name='departureDateForm' required />
                <label htmlFor='returnDateForm'>Fecha de regreso:</label>
                <input placeholder='Introduce la fecha de regreso' type='date' id='returnDateForm' name='returnDateForm' required />
                <div className='btn-container'>
                <button className='btn-form' type='submit'>Enviar</button>
                </div>
            </form>
        </>
    );
}

export default FormReserve;