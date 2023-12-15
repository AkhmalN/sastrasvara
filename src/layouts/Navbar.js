import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaUser, FaSearch } from "react-icons/fa";
import { InputGroup, Form } from "react-bootstrap";
import "../App.css";
import AkunModal from "./AkunModal";
import { useState } from "react";
import LogoutModal from "./LogoutModal";
import { useNavigate } from "react-router-dom";
import Logo from "../img/logo_sastrasvara.png";
import axios from "axios";

function PageNavbar({ isLoggedIn }) {
  const navigate = useNavigate();
  const [showAccount, setShowAccount] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const handleCloseAccount = () => setShowAccount(false);
  const handleShowAccount = () => setShowAccount(true);

  const handleCloseLogout = () => setShowLogout(false);
  const handleShowLogout = () => setShowLogout(true);

  const handleLogin = () => navigate("/");

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="Sastra Svara" width={50} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="align-middle">
          <Nav className="me-auto navbar-nav ms-auto nav_ul align-items-center">
            <Nav.Link
              href="/beranda"
              className="d-flex align-items-center fs-5 "
            >
              Beranda
            </Nav.Link>
            <Nav.Link
              href="/tentang-kami"
              className="d-flex align-items-center fs-5"
            >
              Tentang Kami
            </Nav.Link>

            <NavDropdown
              title="Cerita"
              id="basic-nav-dropdown "
              className="d-flex align-items-center fs-5 "
            >
              <NavDropdown.Item href="#action/3.1">Judul 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Judul 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Judul 3</NavDropdown.Item>
            </NavDropdown>

            <Nav>
              <InputGroup size="sm" className="d-flex align-items-center mx-1 ">
                <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
                <InputGroup.Text
                  id="inputGroup-sizing-sm"
                  className="custom-input-btn mx-1"
                >
                  <FaSearch />
                </InputGroup.Text>
              </InputGroup>
            </Nav>
          </Nav>

          <Nav className="d-flex align-items-center  ">
            {isLoggedIn ? (
              <NavDropdown
                title={<FaUser />}
                id="basic-nav-dropdown"
                className="d-flex align-items-center"
              >
                <NavDropdown.Item onClick={handleShowAccount}>
                  Akun Saya
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleShowLogout}>
                  Keluar
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown
                title="Masuk"
                id="basic-nav-dropdown"
                className="d-flex align-items-center"
              >
                <NavDropdown.Item onClick={handleLogin}>Masuk</NavDropdown.Item>
              </NavDropdown>
            )}
            <AkunModal
              showAccount={showAccount}
              handleCloseAccount={handleCloseAccount}
            />
            <LogoutModal
              showLogout={showLogout}
              handleCloseLogout={handleCloseLogout}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;
