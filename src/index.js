import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import {Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './login';
import SReg from './SReg';
import TReg from './Treg';
import Credit from './Credit';
import Set from './Set';
import Vc from './Vc';
import Profile from './Profile';
import Home from './home';
import C1 from './c1';
import C2 from './c2';
import C3 from './c3';
import C4 from './c4';
import C5 from './c5';
import C6 from './c6';
import C7 from './c7';
import C8 from './c8';
import C9 from './c9';
import C10 from './c10';
import Payment from './payment';
import Makepay from './verpay';
import Donepay from './paydone';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './redux/user';
import Mc from './mc';
import Mc1 from './mc1';
import Mc2 from './mc2';
import Mc3 from './mc3';
import Mc4 from './mc4';
import Mc5 from './mc5';
import Mc6 from './mc6';
import Mc7 from './mc7';
import Mc8 from './mc8';
import Mc9 from './mc9';
import Mc10 from './mc10';
import Assi from './assi';
import Asse from './asse';
const store=configureStore({
  reducer:{
    user:userReducer
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/prereg" element={<App />}></Route>
      <Route path="/sreg" element={<SReg />}></Route>
      <Route path="/treg" element={<TReg />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/credit" element={<Credit />}></Route>
      <Route path="/set" element={<Set />}></Route>
      <Route path="/vc" element={<Vc />}></Route>
      <Route path="/Profile" element={<Profile />}></Route>
      <Route path="/c1" element={<C1 />}></Route>
      <Route path="/c2" element={<C2 />}></Route>
      <Route path="/c3" element={<C3 />}></Route>
      <Route path="/c4" element={<C4 />}></Route>
      <Route path="/c5" element={<C5 />}></Route>
      <Route path="/c6" element={<C6 />}></Route>
      <Route path="/c7" element={<C7 />}></Route>
      <Route path="/c8" element={<C8 />}></Route>
      <Route path="/c9" element={<C9 />}></Route>
      <Route path="/c10" element={<C10 />}></Route>
      <Route path="/pay" element={<Payment />}></Route>
      <Route path="/verpay" element={<Makepay />}></Route>
      <Route path="/paydone" element={<Donepay />}></Route>
      <Route path="/mc" element={<Mc />}></Route>
      <Route path="/mc1" element={<Mc1 />}></Route>
      <Route path="/mc2" element={<Mc2 />}></Route>
      <Route path="/mc3" element={<Mc3 />}></Route>
      <Route path="/mc4" element={<Mc4 />}></Route>
      <Route path="/mc5" element={<Mc5 />}></Route>
      <Route path="/mc6" element={<Mc6 />}></Route>
      <Route path="/mc7" element={<Mc7 />}></Route>
      <Route path="/mc8" element={<Mc8 />}></Route>
      <Route path="/mc9" element={<Mc9 />}></Route>
      <Route path="/mc10" element={<Mc10 />}></Route>
      <Route path="/assi" element={<Assi />}></Route>
      <Route path="/asse" element={<Asse />}></Route>
    </Routes>
  </Provider>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();