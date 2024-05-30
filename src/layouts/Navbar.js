import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaUser, FaSearch } from "react-icons/fa";
import { InputGroup, Form } from "react-bootstrap";
import "../App.css";
import AkunModal from "./AkunModal";
import { useState } from "react";
import LogoutModal from "./LogoutModal";
import { useNavigate } from "react-router-dom";
import Logo from "../img/logo_sastrasvara.png";

function PageNavbar({ isLoggedIn }) {
  const navigate = useNavigate();
  const [showAccount, setShowAccount] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const handleCloseAccount = () => setShowAccount(false);
  const handleShowAccount = () => setShowAccount(true);

  const handleCloseLogout = () => setShowLogout(false);
  const handleShowLogout = () => setShowLogout(true);

  const handleLogin = () => navigate("/sastrasvara/masuk");

  return (
    <Navbar expand="lg" className="custom-navbar bg-body-tertiary">
      <Container>
<<<<<<< HEAD
        {/* <Navbar.Brand href="/">SASTRASVARA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Beranda</Nav.Link>
            <Nav.Link href="#tentangkami">Tentang Kami</Nav.Link>
            <Nav.Link href="#link">Cerita</Nav.Link>
=======
        <Navbar.Brand href="/sastrasvara">
          <img src={Logo} alt="Sastra Svara" width={50} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="align-middle">
          <Nav className="me-auto navbar-nav ms-auto nav_ul align-items-center">
            <Nav.Link
              href="/sastrasvara"
              className="d-flex align-items-center fs-5 "
            >
              Beranda
            </Nav.Link>
            <Nav.Link
              href="/sastrasvara/tentang-kami"
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
>>>>>>> b7abd1f2fea4b0e530fdc03b6a5be69d7cbc2d37
          </Nav>

          <Nav className="d-flex align-items-center  ">
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
<<<<<<< HEAD
              // <NavDropdown
              //   title="Masuk"
              //   id="basic-nav-dropdown"
              //   className="d-flex align-items-center"
              // >
              //   <NavDropdown.Item onClick={handleLogin}>Masuk</NavDropdown.Item>
              // </NavDropdown>
              <Nav.Link href="/" className="d-flex align-items-center">Masuk</Nav.Link>
=======
              <NavDropdown
                title="Masuk"
                id="basic-nav-dropdown"
                className="d-flex align-items-center"
              >
                <NavDropdown.Item onClick={handleShowAccount}>
                  Akun Saya
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogin}>Masuk</NavDropdown.Item>
              </NavDropdown>
>>>>>>> b7abd1f2fea4b0e530fdc03b6a5be69d7cbc2d37
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
