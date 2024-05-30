import React, { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LOGO from "../img/logo_sastrasvara.png";

const Login = ({ setIsLoggedIn }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleOnSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      await axios
        .post(" http://localhost:8081/api/v1/auth/", { email, password })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", res.data.user.username);
            localStorage.setItem("email", res.data.user.email);
            localStorage.setItem("id", res.data.user.id);
            setIsLoggedIn(true);
            navigate("/beranda");
          } else if (res.status === 404) {
            setError("Email atau password tidak ditemukan");
          }
        });
    } catch (error) {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="Login">
      <Row className="justify-content-evenly align-items-center min-vh-100">
        <Col md={3} xs={10}>
          <img src={LOGO} alt="Sastra Svara" width="100%" />
        </Col>
        <Col md={4} xs={12}>
          <h1>Masuk Sastrasvara</h1>
          <br/>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Kata Sandi:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid mb-3">
              <Button variant="primary" size="lg" onClick={handleOnSubmit}>
                {loading ? "Loading ..." : "Masuk"}
              </Button>
            </div>
            {error && <p className="text-danger">{error}</p>}
          </Form>
          <p>
            Belum memiliki akun? <Link to={"/daftar"}>Daftar disini.</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;