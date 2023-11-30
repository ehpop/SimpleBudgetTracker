import React from 'react';
import './App.css';
import Header from "./components/Header";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Payments from './components/Payments';
import Charts from './components/Charts';

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="payments" element={<Payments/>}/>
                <Route path="charts" element={<Charts/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

const NotFound = () => {
    return (
        <div>
            <h1>Not found</h1>
        </div>
    );
}

export default App;
