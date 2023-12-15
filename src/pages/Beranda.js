import React, { useEffect, useState } from "react";

const Beranda = ({ isLoggedIn }) => {
  const [username, setUsername] = useState(null);
  const [data, setData] = useState([]);
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
