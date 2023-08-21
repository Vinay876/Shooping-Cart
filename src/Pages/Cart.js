import React from 'react';
// for getting a data from store we have to use useSelector hook (ager hme store change krna hai to action ko dispatch krna pdta hai)
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/CartSlice';

export default function Cart() {
  // now we will subscribe our data
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productID) => {
    dispatch(remove(productID));
  };

  return (
    <>
      <h3>Cart</h3>
      <div className="cardWrapper">
        {items.map((product) => (
          <div className="cartCard">
            <img src={product.image} alt="Product-Image" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <h5>{product.category}</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove From Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
