import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./component/Home";
import Projects2 from "./component/Project2";
import Resume from "./component/Resume";
import About from "./component/About";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portofolio" element={<Home />} />
        <Route path="/portofolio/resume" element={<Resume />} />
        <Route path="/portofolio/projects" element={<Projects2 />} />
        <Route path="/portofolio/about" element={<About />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
