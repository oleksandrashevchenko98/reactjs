import React, { useState } from 'react';
import pizzas from './data'; 
import '../../css/menu.css';


const Menu = () => {
  const [pizzaCounts, setPizzaCounts] = useState({});
  const increaseCount = (pizzaId) => {
    setPizzaCounts((prevCounts) => ({
      ...prevCounts,
      [pizzaId]: (prevCounts[pizzaId] || 0) + 1,
    }));
  };
  const decreaseCount = (pizzaId) => {
    if (pizzaCounts[pizzaId] > 0) {
      setPizzaCounts((prevCounts) => ({
        ...prevCounts,
        [pizzaId]: prevCounts[pizzaId] - 1,
      }));
    }
  };
  const addToCart = (pizzaId) => {
    setPizzaCounts((prevCounts) => ({
      ...prevCounts,
      [pizzaId]: 1, 
    }));
  };
  const resetCount = (pizzaId) => {
    setPizzaCounts((prevCounts) => ({
      ...prevCounts,
      [pizzaId]: 0, 
    }));
  };

  return (
    <ul>
      {pizzas.map((pizza) => (
        <li key={pizza.id} className="pizza">
          <img src={pizza.imageUrl} alt={pizza.name} className="pizza__image" />
          <div className="pizza__info">
            <p className="pizza__name">{pizza.name}</p>
            <p className="pizza__ingredients">{pizza.ingredients.join(', ')}</p>
            <div className="pizza__actions">
              {pizza.soldOut ? (
                <p className="pizza__price">Sold out</p>
              ) : (
                <>
                  <p className="pizza__price">€{pizza.unitPrice.toFixed(2)}</p>
                  {!pizzaCounts[pizza.id] && (
                    <button className="button" onClick={() => addToCart(pizza.id)}>Add to cart</button>
                  )}
                  {pizzaCounts[pizza.id] && (
                    <div className="pizza__quantity">
                      <button className="quantity-button" onClick={() => decreaseCount(pizza.id)}>-</button>
                      <span>{pizzaCounts[pizza.id]}</span>
                      <button className="quantity-button" onClick={() => increaseCount(pizza.id)}>+</button>
                      <button className="delete-button" onClick={() => resetCount(pizza.id)}>Delete</button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Menu;