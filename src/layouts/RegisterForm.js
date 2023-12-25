import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LOGO from "../img/logo_sastrasvara.png";
import axios from "axios";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [succses, setSuccses] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const data = {
    username: username,
    email: email,
    password: password,
  };

  const handleOnSubmit = async () => {
    setLoading(true);
    try {
      if (data.username === "" && data.email === "" && data.password === "") {
        setError("Isi Semua Form Terlebih Dahulu!");
        setTimeout(() => {
          setError("");
        }, 1500);
      } else if (
        data.username === "" ||
        data.email === "" ||
        data.password === ""
      ) {
        setError("Lengkapi Semua Form!");
        setTimeout(() => {
          setError("");
        }, 1500);
      } else {
        await axios
          .post(
            "https://server-sastrasvara-akhmaln.vercel.app/api/v1/users/register",
            data
          )
          .then((response) => {
            if (response.status === 200) {
              setSuccses("Berhasil Membuat Akun!");
              setTimeout(() => {
                setSuccses(null);
                window.location.reload();
              }, 3000);
            }
          });
      }
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError("");
      }, 1500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="registerForm">
      <Row className="justify-content-md-center align-items-center min-vh-100">
        <Col md={3} xs={12}>
          <img src={LOGO} alt="Sastra Svara" width="100%" />
        </Col>
        <Col md={4} xs={12}>
          <h2>Register Sastrasvara</h2>
          {succses && <div className="alert alert-success">{succses}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nama Lengkap :</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nama Lengkap"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email :</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Kata Sandi :</Form.Label>
              <Form.Control
                type="password"
                placeholder="Kata Sandi"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </Form.Group>

            <div className="d-grid mb-3">
              <Button variant="primary" size="lg" onClick={handleOnSubmit}>
                {loading ? "Loading ... " : "DAFTAR"}
              </Button>
            </div>
          </Form>

          <p>
            Sudah memiliki akun?{" "}
            <Link to={"/sastrasvara/masuk"}>Masuk disini.</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterForm;
