import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../img/pngwing.com.png"

function TentangKami() {
  return (
    <Container>
      <img src={Logo} alt="Sastra Svara" width={200}/>

      <p>
        Sastra Svara adalah platform yang didedikasikan untuk pegiat bahasa dan
        sastra Indonesia agar semakin memudahkan pembelajaran menyimak yang
        dituangkan dalam media kreatif dan inovatif. Sastra Svara diharapkan
        dapat membantu guru, siswa, dan pegiat bahasa dan sastra Indonesia untuk
        memaksimalkan potensi dari cerita rakyat setempat. Sastra Svara
        memformulasikan platform ini sebagai media bagi cerita rakyat agar tetap
        lestari sehingga dimanfaatkan bagi seluruh khalayak yang mencintainya.
        Kali ini Sastra Svara diperuntukkan kepada masyarakat Malang Raya
        bekerja sama dengan MGMP Bahasa Indonesia SMP di Kota Malang.
      </p>
    </Container>
  );
}

export default TentangKami;
