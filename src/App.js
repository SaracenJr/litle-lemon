import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/home/home';
import Menu from './components/menu/menu';
import Booking from './components/booking/booking';
import About from './components/about/about';
import './App.css';
import Layout from "./components/layout/layout";

const NotFound = () => (
    <div>
        <h2>404 - Page Not Found</h2>
    </div>
);

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="menu" element={<Menu />} />
                    <Route path="booking" element={<Booking />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}




