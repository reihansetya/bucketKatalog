import React from "react";

import "./index.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Navbar from "./template/Navbar";
import Contact from "./pages/Contact";
import Promo from "./pages/Promo";
import { Admin } from "./pages/Admin";
import { Add } from "./pages/Add";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  faTwitter,
  faFontAwesome,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import DetailProduct from "./pages/DetailProduct";
import Edit from "./pages/Edit";
import { AlertProvider } from "./context/AlertContext";

library.add(fas, far, faTwitter, faFontAwesome, faInstagram, faWhatsapp);

function App() {
  return (
    <Router>
      <Navbar />
      <AlertProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/icantik" element={<Admin />} />
          <Route path="/icantik/add" element={<Add />} />
          <Route path="/icantik/edit/:id" element={<Edit />} />
        </Routes>
      </AlertProvider>
    </Router>
  );
}

export default App;
