import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./component/Home";
import Resume from "./component/Resume";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="about" element={<Resume />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
