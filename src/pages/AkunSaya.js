import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Profile from "../img/pngwing.com.png";

function AkunSaya() {
  return (
    <Container className="akunSaya">
      <Row>
        <Col>
          <img src={Profile} alt="profile" />
        </Col>
        <Col>
          <p>Nama : Agni Nafitri</p>
          <p>Email : agninafitri27@gmail.com</p>
          <p>Asal sekolah : Universitas Siber Asia</p>
          <Button>Edit Akun</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AkunSaya;
