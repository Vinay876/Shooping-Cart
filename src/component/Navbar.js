//@ts-ignore
import React from 'react';
import { Link } from 'react-router-dom';
// for getting a element from redux store we have to use another hook
import { useSelector } from 'react-redux';
export default function Navebar() {
  // useSelector is work on a subscription model so thier we have to have to give a complete state and whenever the value of cart will changes  it will automatically reflect thier
  const items = useSelector((state) => state.cart);
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span className="logo">REDUX STORE</span>
        <div>
          <Link className="navlink" to="/">
            Home
          </Link>
          <Link className="navlink" to="/cart">
            Cart
          </Link>

          <span className="cartCount">CART Items:{items.length}</span>
        </div>
      </div>
    </>
  );
}
