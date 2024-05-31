import { Button, Modal } from "react-bootstrap"

function AdminDeleteModal({showDeleteModal, handleCloseDeleteModal}) {
  return (
    <Modal
      show={showDeleteModal}
      onHide={handleCloseDeleteModal}
      className="text-center" 
    >
      <Modal.Body>
        <h5>Apakah Anda Yakin Ingin Menghapus Cerita Ini?</h5>
      </Modal.Body>
      <Modal.Footer className="m-auto">
        <Button variant="secondary">Tidak</Button>
        <Button>Hapus</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AdminDeleteModal