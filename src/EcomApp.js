
import React, { useState } from 'react';
import './EcomApp.css';
import products from './products';




const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.Imgurl} alt="prod" />
          <h3>{product.name}</h3>
          <p>Rs.{product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.Imgurl} alt="item" />
          <p>{item.name}</p>
          <p>${item.price.toFixed(2)}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
const EcomApp = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
      setCart([...cart, product]);
    };
  
    const removeFromCart = (productId) => {
      const updatedCart = cart.filter((item) => item.id !== productId);
      setCart(updatedCart);
    };
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>E-Commerce Website</h1>
          
        </header>
        <div className="main-content">
          <div className="col1">
          <ProductList addToCart={addToCart} />
          </div>
            <div className="col2"> <ShoppingCart cart={cart} removeFromCart={removeFromCart} /></div>
           
          </div>
      </div>
    );
}

export default EcomApp
