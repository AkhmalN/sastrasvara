import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import CobanRondoPic from "../img/coban_rondo.jpeg"
import AjisakaPic from "../img/ajisaka.jpeg"

function Cerita() {
  return (
    <>
    <h2>cerita</h2>
    <div className="cerita d-flex text-center mt-5">
      <Card id="" className="mx-5">
        <Card.Img variant="top" src={AjisakaPic} />
        <Card.Body>
          <Card.Title>
            <Link to={"/cerita/judul"}>Legenda Aji Saka</Link>
          </Card.Title>
        </Card.Body>
      </Card>
      <Card id="">
        <Card.Img variant="top" src={CobanRondoPic} />
        <Card.Body>
          <Card.Title>
            <Link to={"/cerita/judul"}>Asal Usul Coban Rondo</Link>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
    </>
  );
}

export default Cerita;
