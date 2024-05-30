import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import Logo from "../img/logo_sastrasvara.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AkunModal(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [id, setId] = useState(null);
  const [kelas, setKelas] = useState(null);
  const [kampus, setKampus] = useState(null);
  const [succsesEdit, setSuccsesEdit] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const getLocalStorageValue = (key) => {
    const storedValue = localStorage.getItem(key);
    return storedValue;
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const storedId = localStorage.getItem("id");
    const storedKelas = localStorage.getItem("kelas");
    const storedKampus = localStorage.getItem("kampus");
    const storedLogin = localStorage.getItem("isLoggedIn");
    setUsername(storedUsername);
    setEmail(storedEmail);
    setId(storedId);
    setKelas(storedKelas);
    setKampus(storedKampus);
    setIsLoggedIn(storedLogin);
  }, []);

  const handleEditAndSave = async () => {
    const data = {
      username: username,
      email: email,
      kelas: kelas,
      asal_kampus: kampus,
    };
    try {
      await axios
        .patch(`https://server-sastrasvara.vercel.app/api/v1/users/${id}`, data)
        .then((response) => {
          console.log(response);
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("kelas", response.data.kelas);
          localStorage.setItem("kampus", response.data.asal_kampus);
          setSuccsesEdit("berhasil Mengubah Data!");
          setTimeout(() => {
            setSuccsesEdit(null);
            navigate("/sastrasvara/");
            window.location.reload(); // Reload the page
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
          {isLoggedIn ? (
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
                <label className="form-label">Nama :</label>
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

                <label className="form-label">Kelas :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="kelas"
                  value={kelas !== null && kelas !== "undefined" ? kelas : "-"}
                  onChange={(e) => setKelas(e.target.value)}
                />

                <label className="form-label">Asal Sekolah :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="asal sekolah"
                  value={
                    kampus !== null && kampus !== "undefined" ? kampus : "-"
                  }
                  onChange={(e) => setKampus(e.target.value)}
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
              Simpan
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AkunModal;
