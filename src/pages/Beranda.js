import React, { useEffect, useState } from "react";
import ImageLogo from "../img/logo_sastrasvara.png";
import { Button, Card } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import AjisakaPic from "../img/ajisaka.jpeg";

const Beranda = ({ isLoggedIn }) => {
  return (
    <div className="beranda container-fluid">
      <header className="d-flex justify-content-evenly align-items-center">
        <img src={ImageLogo} alt="sastrasvara"></img>
        <div className="text-center">
          <h1>SASTRA SVARA</h1>
          <p>
            "Menghidupkan Sastra dengan Teks dan Suara" <br />
            Merajut Kisah Nusantara: Cerita Rakyat dalam Teks dan Audio untuk
            Pecinta Bahasa dan Sastra Indonesia
          </p>
          <button>Pelajari Lebih Lanjut</button>
        </div>
        <img src={ImageLogo} alt="sastrasvara"></img>
      </header>

      <div className="tentangkami">
        <h2 className="text-center">Tentang Kami</h2>
        <br />
        <p>
          Sastra Svara adalah platform yang didedikasikan untuk pegiat bahasa
          dan sastra Indonesia agar semakin memudahkan menyimak pembelajaran
          yang dituangkan dalam media kreatif dan inovatif. Sastra Svara
          diharapkan dapat membantu guru, siswa, dan pegiat bahasa dan sastra
          Indonesia untuk memaksimalkan potensi dari cerita rakyat setempat.
          Sastra Svara memformulasikan platform ini sebagai media bagi cerita
          rakyat agar tetap lestari sehingga dimanfaatkan bagi seluruh khalayak
          yang mencintainya. Kali ini Sastra Svara diperuntukkan kepada
          masyarakat Malang Raya bekerja sama dengan MGMP Bahasa Indonesia SMP
          di Kota Malang.
        </p>
      </div>

      <div className="cerita-preview">
        <h2 className="text-center">Cerita</h2>
        <br />
        <div className="cerita-prev-card d-flex">
          <Card id="">
            <Card.Img variant="top" src={AjisakaPic} />
            <Card.Body>
              <Card.Title>judul</Card.Title>
              <Link to={"/cerita/judul"} className="text-right">
                selengkapnya
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
