import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import PageNavbar from "./layouts/Navbar";
import Login from "./layouts/Login";
import RegisterForm from "./layouts/RegisterForm";
import AdminDashboard from "./pages/AdminDashboard";
import DetailCerita from "./pages/DetailCerita";
import Cerita from "./pages/Cerita";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedStatus = localStorage.getItem("isLoggedIn");
    return storedStatus === "true";
  });

  const isNavbarVisible = () => {
    const currentPath = window.location.pathname.toLowerCase();
    return currentPath !== "/" && currentPath !== "/daftar";
  };
  return (
    <div>
      {isNavbarVisible() && <PageNavbar isLoggedIn={isLoggedIn} />}
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/daftar" element={<RegisterForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/cerita" element={<Cerita />} />
        <Route path="/cerita/judul" element={<DetailCerita />} />
      </Routes>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/">
    <Index />
  </BrowserRouter>
);
