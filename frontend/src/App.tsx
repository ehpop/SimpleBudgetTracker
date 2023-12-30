import React from 'react';
import './App.css';
import Header from "./components/Header";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Payments from './components/Payments';
import Charts from './components/Charts';
import MockDataButton from "./utils/MockDataButton";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route element={<ProtectedRoute/>}>
                    <Route path="payments" element={<Payments/>}/>
                    <Route path="charts/:type" element={<Charts/>}/>
                </Route>
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
