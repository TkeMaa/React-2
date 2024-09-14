import React from 'react'

function MenuItem( {image, name, price, description, onAddToCart } ) {
  return (
    <div className="menuItem">
        <div style={{ backgroundImage:`url(${image})` }} > </div>
        <h1> {name} </h1>
        <h3> {price} RSD </h3>
        <p> {description} </p>
        <button onClick={onAddToCart}>Dodaj u korpu</button>
    </div>
  )
}

export default MenuItem