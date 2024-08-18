                                                ////////// PARENT FILE OF THE PROJECT//////////////////

import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Premier from "./routes/Premier";
import Contact from "./routes/Contact";
import {Route,Routes} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      {/* Routing the pages */}
    <div className="App">
      {/* ScrollToTop component inside App component */} 
      <ScrollToTop />
      <Routes>   
        <Route path="/" element={<Home/>}  />
        <Route path="/premier" element={<Premier/>}  />
        <Route path="/about" element={<About/>}  />
        <Route path="/contact" element={<Contact/>}  />
      </Routes>
    </div>
    </>
  );
}

export default App;
