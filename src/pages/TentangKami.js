import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../img/logo_sastrasvara.png";

function TentangKami() {
  return (
    <Container className="tentangKami">
      <Row className="align-items-center">
        <Col xs={{ span: 12, order: 2 }} md={{ span: 8, order: 1 }}>
          <p>
            Sastra Svara adalah platform yang didedikasikan untuk pegiat bahasa
            dan sastra Indonesia agar semakin memudahkan pembelajaran menyimak
            yang dituangkan dalam media kreatif dan inovatif. Sastra Svara
            diharapkan dapat membantu guru, siswa, dan pegiat bahasa dan sastra
            Indonesia untuk memaksimalkan potensi dari cerita rakyat setempat.
            Sastra Svara memformulasikan platform ini sebagai media bagi cerita
            rakyat agar tetap lestari sehingga dimanfaatkan bagi seluruh
            khalayak yang mencintainya. Kali ini Sastra Svara diperuntukkan
            kepada masyarakat Malang Raya bekerja sama dengan MGMP Bahasa
            Indonesia SMP di Kota Malang.
          </p>
        </Col>

        <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 2 }} className="text-center">
          <img src={Logo} alt="Sastra Svara"/>
        </Col>
      </Row>
    </Container>
  );
}

export default TentangKami;
