import './style.css';
//@ts-ignore
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//@ts-ignore
import Home from './Pages/Home';
//@ts-ignore
import Cart from './Pages/Cart';
//@ts-ignore
import Navebar from './component/Navbar';
//@ts-ignore
import store from './store/store.js';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
