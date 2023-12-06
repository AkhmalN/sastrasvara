import { Button, Modal } from "react-bootstrap";
import Logo from "../img/pngwing.com.png";

function AkunModal(props) {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        className="text-center"
      >
        <Modal.Body>
          <h2 className="mb-3">Akun Saya</h2>
          <img src={Logo} alt="Sastra Svara" width={100} className="mb-3" />
          <p>Nama : Agni Nafitri</p>
          <p>Email : agninafitri27@gmail.com</p>
          <p>Kelas : IT-106</p>
          <p>Asal sekolah : Universitas Siber Asia</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Tutup
          </Button>
          <Button variant="primary">Edit Akun</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AkunModal;
