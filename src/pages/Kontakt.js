import { useState } from 'react'
import React from 'react'
import "../styles/Kontakt.css";

function Kontakt() {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange =(e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, 
      [name]:value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.firstName.trim()) {
      validationErrors.firstName = "Ime je obavezno";
    }
    
    if (!formData.lastName.trim()) {
      validationErrors.lastName = "Prezime je obavezno";
    }
    
    if (!formData.firstName.trim()) {
      validationErrors.email = "Email je obavezan";
    } else if (!/\S+@\S+\S+/.test(formData.email)) {
      validationErrors.email = "Email neispravan";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      window.alert(`
        Ime: ${formData.firstName}
        Prezime: ${formData.lastName}
        Email: ${formData.email}
        Napomena: ${formData.message}
      `);
      // Resetuj formu
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    } 
  }

  /*
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};

    if (!formData.firstName.trim()) {
      formErrors.firstName = 'Ime je obavezno';
    }
    if (!formData.lastName.trim()) {
      formErrors.lastName = 'Prezime je obavezno';
    }
    if (!formData.email) {
      formErrors.email = 'Email je obavezan';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email nije validan';
    }

    return formErrors;
  };

  // Funkcija za rukovanje promenama u input poljima
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Funkcija za slanje forme
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    
    // Ako postoje greške, postavi ih u state i ne šalji formu
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      // Prikaži pop-up sa prikupljenim podacima
      window.alert(`
        Ime: ${formData.firstName}
        Prezime: ${formData.lastName}
        Email: ${formData.email}
        Poruka: ${formData.message}
      `);
      
      // Resetuj formu nakon slanja
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    }
  };
  */

  return (
    <div className="contact">
        <form onSubmit={handleSubmit}>
          <h2>Kontakt</h2>
          <label>Unesite ime:</label>
          <div className="input-box">
              <input 
                type="text" 
                className="field" 
                placeholder="Unesite ime"
                name="firstName"
                onChange={handleChange}
                style={{
                  borderColor: errors.firstName ? 'red' : 'initial',
                  borderWidth: '1px',
                  borderStyle: 'solid'
                }}
              />     
          </div>
          <label>Unesite prezime:</label>
          <div className="input-box">
              <input 
                type="text" 
                className="field" 
                placeholder="Unesite prezime" 
                name="lastName"
                onChange={handleChange}
                style={{
                  borderColor: errors.lastName ? 'red' : 'initial',
                  borderWidth: '1px',
                  borderStyle: 'solid'
                }}
              />
          </div>
          <label>Unesite e-mail:</label>
          <div className="input-box">
              <input 
                type="email" 
                className="field" 
                placeholder="Unesite e-mail"
                name="email"
                onChange={handleChange}
                style={{
                  borderColor: errors.email ? 'red' : 'initial',
                  borderWidth: '1px',
                  borderStyle: 'solid'
                }}
              />
          </div>
          <label>Poruka:</label>
          <textarea 
            className="field message" 
            rows="6" 
            placeholder="Unesite poruku"
            name="message"
          > 
          </textarea>
          <button type="submit">Pošalji</button>             
        </form>
    </div>  
  )
}

export default Kontakt