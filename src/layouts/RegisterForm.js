import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RegisterForm() {
  return (
    <Container className="registerForm">
      <Row>
        <Col md={5} xs={12}>
          <h1>LOGO</h1>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nama Lengkap :</Form.Label>
              <Form.Control type="email" placeholder="Nama Lengkap" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email :</Form.Label>
              <Form.Control type="password" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Kata Sandi :</Form.Label>
              <Form.Control type="password" placeholder="Kata Sandi" />
            </Form.Group>

            <div className="d-grid mb-3">
              <Button variant="primary" size="lg">
                DAFTAR
              </Button>
            </div>
          </Form>

          <p>
            Sudah memiliki akun? <Link to={"/masuk"}>Masuk disini.</Link>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterForm