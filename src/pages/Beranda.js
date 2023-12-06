import React from "react";
import { Button } from "react-bootstrap";
const Beranda = ({ isLoggedIn, username }) => {
  return (
    <div className="container-fluid">
      <h1>Welcome to Home</h1>
      {isLoggedIn && <p>Hello, {username}!</p>}
    </div>
  );
};

export default Beranda;
