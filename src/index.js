import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Beranda from "./pages/Beranda";
import PageNavbar from "./layouts/Navbar";
import Login from "./layouts/Login";
import RegisterForm from "./layouts/RegisterForm";
import TentangKami from "./pages/TentangKami";

const Index = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedStatus = localStorage.getItem("isLoggedIn");
    return storedStatus === "true";
  });
  // const [isLoggedIn, setIsLoggedIn] = useState(null);

  const isNavbarVisible = () => {
    const currentPath = window.location.pathname.toLowerCase();
    return currentPath !== "/" && currentPath !== "/daftar";
  };
  useEffect(() => {
    if (window.location.pathname.toLowerCase() === "/") {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  // Kunci Route

  // useEffect(() => {
  //   if (
  //     (!isLoggedIn && window.location.pathname.toLowerCase() === "/beranda") ||
  //     window.location.pathname.toLowerCase() === "/tentang-kami"
  //   ) {
  //     navigate("/");
  //   }
  // }, [isLoggedIn, navigate]);
  return (
    <div>
      {isNavbarVisible() && <PageNavbar isLoggedIn={isLoggedIn} />}
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/sastrasvara/beranda" element={<Beranda />} />
        <Route path="/sastrasvara/daftar" element={<RegisterForm />} />
        <Route path="/sastrasvara/tentang-kami" element={<TentangKami />} />
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
