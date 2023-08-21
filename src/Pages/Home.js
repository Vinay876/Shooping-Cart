import React from 'react';
import Products from '../component/Product.js';

export default function Home() {
  return (
    <>
      <h2 className="heading">Welcome to the Redux Toolkit Store</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </>
  );
}
