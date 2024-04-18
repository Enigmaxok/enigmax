import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import ContactForm from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Eventos from "./pages/Eventos/Eventos";
import WhatIs from "./pages/WhatIs/WhatIs";
const App = () => {
  return (
    <div  className="app-container">
        <div className="background-container" />


    <Router>
        <Header />
 


        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seccion1" element={<WhatIs/>} />
            <Route path="/eventos" element={<Eventos/>} />
            <Route path="/contacto" element={<ContactForm />} />
          </Routes>
        </div>

      
        <Footer />
    </Router>
    </div>
  );
};

export default App;
