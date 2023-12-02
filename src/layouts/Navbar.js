import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser, FaSearch } from "react-icons/fa";
import { InputGroup, Form } from "react-bootstrap";
import "../App.css";

function PageNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="align-middle ">
          <Nav className="me-auto navbar-nav ms-auto nav_ul align-items-center">
            <Nav.Link href="#home" className="d-flex align-items-center fs-5 ">
              Beranda
            </Nav.Link>
            <Nav.Link href="#home" className="d-flex align-items-center fs-5">
              Tentang Kami
            </Nav.Link>

            <NavDropdown
              title="Cerita"
              id="basic-nav-dropdown "
              className="d-flex align-items-center fs-5 "
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
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
          <Nav href="#link" className="d-flex align-items-center  ">
            <NavDropdown
              title={<FaUser />}
              id="basic-nav-dropdown"
              className="d-flex align-items-center "
            >
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;
