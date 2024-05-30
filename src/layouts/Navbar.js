import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaUser, FaSearch } from "react-icons/fa";
import { InputGroup, Form } from "react-bootstrap";
import "../App.css";
import AkunModal from "./AkunModal";
import { useState } from "react";
import LogoutModal from "./LogoutModal";
import { useNavigate } from "react-router-dom";

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
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Beranda</Nav.Link>
            <Nav.Link href="#tentangkami">Tentang Kami</Nav.Link>
            <Nav.Link href="#link">Cerita</Nav.Link>
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
              // <NavDropdown
              //   title="Masuk"
              //   id="basic-nav-dropdown"
              //   className="d-flex align-items-center"
              // >
              //   <NavDropdown.Item onClick={handleLogin}>Masuk</NavDropdown.Item>
              // </NavDropdown>
              <Nav.Link href="/" className="d-flex align-items-center">Masuk</Nav.Link>
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
