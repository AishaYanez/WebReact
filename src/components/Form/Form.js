import React, { useState } from 'react';
import './Form.css'

function Form() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [DNI, setDNI] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [formDataArray, setFormDataArry] = useState([]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const formData = {name, lastName, DNI, departureDate, returnDate};
        setFormDataArry(...formDataArray, formData);
    };

    return (
        <>
            <form className='form-FormComponent' onSubmit={handleSubmit}>
                <label htmlFor='nameForm'>Nombre:</label>
                <input placeholder='Introuduce tu nombre' type='text' id='nameForm' name='nameForm' required />
            </form>
        </>
    );
}

export default Form;