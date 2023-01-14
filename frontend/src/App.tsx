import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Header from './components/Header';
import Home from './components/Home';
import User from './components/User';

function App() {
    return (
        <BrowserRouter basename='car_rental'>
            <div className='App'>
                <Header/>
            </div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/user' element={<User/>}/>
                <Route path='/admin' element={<Admin/>}/>
            </Routes>
        </BrowserRouter>
    )
}
  
export default App;
