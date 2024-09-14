import React, { useState } from 'react';
import "../styles/CheckoutPopup.css";

function CheckoutPopup({ onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    if (name && address) {
      onSubmit(name, address);
    } else {
      alert("Molimo popunite sva polja.");
    }
  };

  return (
    <div className="popup">
      <div className="popupContent">
        <h2>Završetak kupovine</h2>
        <input
          type="text"
          placeholder="Ime"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Adresa"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={handleSubmit}>Potvrdi kupovinu</button>
        <button onClick={onClose}>Otkaži</button>
      </div>
    </div>
  );
};

export default CheckoutPopup;