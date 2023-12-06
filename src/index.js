import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import PageNavbar from "./layouts/Navbar";
import LoginForm from "./layouts/LoginForm";
import RegisterForm from "./layouts/RegisterForm";
import TentangKami from "./pages/TentangKami"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <PageNavbar />
    <Routes>
      <Route path="/" Component={Beranda} />
      <Route path="/masuk" Component={LoginForm} />
      <Route path="/daftar" Component={RegisterForm} />
      <Route path="/tentang-kami" Component={TentangKami} />
    </Routes>
  </BrowserRouter>
);
