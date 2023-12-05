import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <Container className="loginForm">
      <Row>
        <Col md={5} xs={12}>
          <h1>LOGO</h1>
        </Col>
        <Col>
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
              <Button variant="primary" size="lg">
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

export default LoginForm;
