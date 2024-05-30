import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LogoutModal({ showLogout, handleCloseLogout }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState(null);
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    localStorage.removeItem("kelas");
    localStorage.removeItem("kampus");
    navigate("/");
    window.location.reload(); // Reload the page

    handleCloseLogout(false);
  };
  return (
    <Modal
      show={showLogout}
      onHide={handleCloseLogout}
      keyboard={false}
      className="text-center"
      centered
    >
      <Modal.Body>
        {username ? (
          <h5 className="mb-4">
            Apakah anda yakin ingin keluar dari akun {username}?
          </h5>
        ) : (
          <h5>Apakah anda yakin ingin keluar</h5>
        )}
        <Button
          size="lg"
          variant="secondary"
          className="me-5"
          onClick={handleCloseLogout}
        >
          Tidak
        </Button>
        <Button size="lg" className="me-5" onClick={handleLogout}>
          Ya
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default LogoutModal;
