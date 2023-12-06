import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
const Beranda = ({ isLoggedIn }) => {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  });
  return (
    <div className="container-fluid">
      <h1>Welcome to Home {username}</h1>
    </div>
  );
};

export default Beranda;
