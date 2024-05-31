import { Button, Modal } from "react-bootstrap";

function AdminReadModal({ showReadModal, handleCloseReadModal }) {
  return (
    <Modal
      show={showReadModal}
      onHide={handleCloseReadModal}
      size="lg"
      centered
    >
      <Modal.Header>
        <Modal.Title>Judul Cerita</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src="" />
        <audio>
          <source src="" type="audio/mpeg" />
        </audio>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseReadModal}>Tutup</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AdminReadModal;
