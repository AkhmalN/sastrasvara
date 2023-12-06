import { Button, Form, Modal } from "react-bootstrap";
import Logo from "../img/pngwing.com.png";

function AkunModal(props) {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <h2 className="mb-3">Akun Saya</h2>
          <img src={Logo} alt="Sastra Svara" width={100} className="mb-3 " />
          <Form>
            <label class="form-label">Username :</label>
            <p className="form-control ">Nama : Agni Nafitri</p>
            <label class="form-label">Email :</label>
            <p className="form-control ">Email : agninafitri27@gmail.com</p>
            <label class="form-label">Class :</label>
            <p className="form-control ">Kelas : IT-106</p>
            <label class="form-label">Class :</label>
            <p className="form-control ">
              Asal sekolah : Universitas Siber Asia
            </p>
          </Form>
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
