import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Header from './components/Header';
import Home from './components/Home';
import User from './components/User';
import Cars from './components/UserSections/Cars';
import Customers from './components/UserSections/Customers';
import Payments from './components/UserSections/Payments';
import Reservations from './components/UserSections/Reservations';

function App() {
    return (
        <BrowserRouter basename='car_rental'>
            <div className='App'>
                <Header/>
            </div>
            <Routes>
                <Route path='home' element={<Home/>}/>
                <Route path='user' element={<User/>}>
                    <Route path='cars' element={<Cars />}/>
                    <Route path='customers' element={<Customers />}/>
                    <Route path='reservations' element={<Reservations />}/>
                    <Route path='payments' element={<Payments />}/>
                </Route>
                <Route path='admin' element={<Admin/>}/>
            </Routes>
        </BrowserRouter>
    )
}
  
export default App;
