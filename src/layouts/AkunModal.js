import { Button, Form, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import Logo from "../img/pngwing.com.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AkunModal(props, { isloggedIn }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [id, setId] = useState(null);
  const [succsesEdit, setSuccsesEdit] = useState(null);
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const storedId = localStorage.getItem("id");
    setUsername(storedUsername);
    setEmail(storedEmail);
    setId(storedId);
  }, []);
  const handleEditAndSave = async (id) => {
    const data = { username: username, email: email };
    try {
      await axios
        .patch(` http://localhost:8081/api/v1/users/${id}`, data)
        .then((response) => {
          console.log(response);
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("email", response.data.email);
          setSuccsesEdit("berhasil Mengubah Data!");
          setTimeout(() => {
            setSuccsesEdit(null);
            navigate("/beranda");
          }, 3000);
        })
        .catch((error) => console.error(error));
    } catch (error) {}
  };
  return (
    <>
      <Modal
        show={props.showAccount}
        onHide={props.handleCloseAccount}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <h2 className="mb-3">Akun Saya</h2>
          {username && email && id ? (
            <>
              {succsesEdit && (
                <div className="alert alert-success">{succsesEdit}</div>
              )}
              <img
                src={Logo}
                alt="Sastra Svara"
                width={100}
                className="mb-3 "
              />

              <div className="mt-3">
                <label className="form-label">Username :</label>
                <input
                  className="form-control"
                  type="text"
                  value={username}
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label className="form-label">Email :</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </>
          ) : (
            <p>Login Terlebih Dahulu!</p>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCloseAccount}>
            Tutup
          </Button>
          {username && email && (
            <Button variant="primary" onClick={() => handleEditAndSave(id)}>
              Edit & Simpan
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AkunModal;
