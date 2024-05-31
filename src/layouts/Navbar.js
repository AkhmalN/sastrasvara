import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaUser, FaSearch } from "react-icons/fa";
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

  return (
    <Navbar expand="lg" className="custom-navbar bg-body-tertiary">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/beranda">Beranda</Nav.Link>
            <Nav.Link href="">Tentang Kami</Nav.Link>
            <Nav.Link href="/cerita">Cerita</Nav.Link>
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
              <Nav.Link href="/" className="d-flex align-items-center">
                Masuk
              </Nav.Link>
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
