import React, { useState } from 'react';
import { useCart } from "../helpers/CartContext";
import CheckoutPopup from '../components/CheckoutPopup';
import "../styles/Cart.css";
import { Height } from '@mui/icons-material';
import { textAlign } from '@mui/system';

function Cart() {

  const { cart, removeFromCart, clearCart } = useCart(); // Pristup stavkama u korpi, uklanjanju i pražnjenju korpe 
  const [showPopup, setShowPopup] = useState(false); // Za prikazivanje popup-a 
  const [successMessage, setSuccessMessage] = useState(''); // Za prikaz uspešne kupovine

  const handleRemoveFromCart = (itemToRemove) => {
    removeFromCart(itemToRemove); // Uklanjanje pojedinačne stavke iz korpe
  };

  const handleCheckout = () => {
    setShowPopup(true); // Otvori popup za unos podataka o korisniku prilikom završetka kupovine
  };

  const handleSubmit = (name, address) => {
    // Logika za potvrdu kupovine, slanje podataka i pražnjenje korpe
    console.log('Kupi stavke:', cart);
    setSuccessMessage(`Kupovina je uspešno realizovana! Hvala ${name}!`);
    clearCart(); // Praznimo korpu nakon uspešne kupovine
    setShowPopup(false); // Zatvori popup nakon potvrde kupovine
  };

  const handleCancelPurchase = () => {
    setShowPopup(false); // Zatvori popup kada kupovina bude otkazana
    alert("Kupovina je otkazana.");
  };

  return (
    <div className="cart">
      <h1 style={{textAlign:"center"}}>Vaša korpa</h1>
      {cart.length === 0 ? (
        <p>Korpa je prazna</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} style={{
                margin: `5px`,
                padding: `5px`,
                backgroundColor : `#f3e5ab`, 
                borderRadius: `15px`,
                boxShadow: `0px 3px 15px rgba(0, 0, 0, 0.2)`,
                textAlign: `center`
              }}>
              <h2>{item.name}</h2>
              <p>{item.price} RSD</p>
              <button className="ukloni" onClick={() => handleRemoveFromCart(item)}>
                Ukloni iz korpe
              </button>
            </div>
          ))}
          <button className="zavrsiKupovinu" onClick={handleCheckout}>Završi kupovinu</button>
        </div>
      )}
      {showPopup && (
        <CheckoutPopup
          onClose={handleCancelPurchase}
          onSubmit={handleSubmit}
        />
      )}
      {successMessage && <div className="successMessage">{successMessage}</div>}
    </div>
  );
}

export default Cart;
