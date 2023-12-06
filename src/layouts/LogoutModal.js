import { Button, Modal } from "react-bootstrap";

function LogoutModal(props) {
  return (
    <Modal
      show={props.showLogout}
      onHide={props.handleCloseLogout}
      keyboard={false}
      className="text-center"
      centered
    >
      <Modal.Body>
        <h3 className="mb-4">Apakah anda yakin ingin keluar?</h3>
        <Button size="lg" variant="secondary" className="me-5"  onClick={props.handleCloseLogout}>Tidak</Button>
        <Button size="lg" className="me-5">Yakin</Button>
      </Modal.Body>
    </Modal>
  );
}

export default LogoutModal;
