import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Categories from './Categories';
import Supplier from './Supplier';
import Home from './Home';

function App() {

    return(
        <div id="main-container">
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Categories' element={<Categories/>}/>
                <Route path='/Supplier' element={<Supplier/>}/>
            </Routes>                   
        </div>
    );
}

export default App;

