import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Check from './pages/check'
import Dets from './pages/info'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/check" element={<Check/>}></Route>
        <Route path="/info" element={<Dets/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
