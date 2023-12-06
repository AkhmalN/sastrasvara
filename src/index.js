import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Beranda from "./pages/Beranda";
import PageNavbar from "./layouts/Navbar";
import Login from "./layouts/Login";
import RegisterForm from "./layouts/RegisterForm";
import TentangKami from "./pages/TentangKami";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div>
      {window.location.pathname.toLowerCase() !== "/" &&
        window.location.pathname.toLowerCase() !== "/daftar" && <PageNavbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/daftar" element={<RegisterForm />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
      </Routes>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>
);
