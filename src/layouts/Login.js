import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../img/pngwing.com.png";

function Login() {
  return (
    <Container className="Login-container">
      <Row className="justify-content-md-center align-items-center min-vh-100">
        <Col md={3} xs={12} className="text-center">
          <img src={Logo} alt="Sastra Svara" width={100} />
        </Col>
        <Col md={4} xs={12}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email :</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Kata Sandi :</Form.Label>
              <Form.Control type="password" placeholder="Kata Sandi" />
            </Form.Group>

            <div className="d-grid mb-3">
              <Button variant="primary" size="lg" href="/beranda">
                Masuk
              </Button>
            </div>
          </Form>

          <p>
            Belum memiliki akun? <Link to={"/daftar"}>Daftar disini.</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
