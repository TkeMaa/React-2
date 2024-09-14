import  { useState } from 'react';
import React from 'react'
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css"
import { useCart } from "../helpers/CartContext";

function Menu() {

  /*const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    alert(`Dodato u korpu: ${item.name}`);
    // Možete dodati više logike za upravljanje korpom ako je potrebno
  };*/

  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="menu">
        <h1 className="menuTitle"> Naša ponuda </h1>
        <div className="menuList">
          {MenuList.map((menuItem, key) => {
            return (
              <MenuItem 
                key={key}
                image={menuItem.image} 
                name={menuItem.name} 
                price={menuItem.price}
                description={menuItem.description}
                onAddToCart={() => handleAddToCart(menuItem)}
              /> 
            );
           })}
        </div>
    </div>
  )
}

export default Menu