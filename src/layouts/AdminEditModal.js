import { Button, Modal } from "react-bootstrap";

function AdminEditModal({ showEditModal, handleCloseEditModal }) {
  return (
    <Modal
      show={showEditModal}
      onHide={handleCloseEditModal}
    >
      <Modal.Body>
        <h2 className="mb-3">Edit Cerita</h2>

        <div className="mt-3">
          <label className="form-label my-2">Judul Cerita :</label>
          <input
            className="form-control"
            type="text"
            placeholder="judul"
            //   value={judulCerita}
            //   onChange={(e) => setJudulCerita(e.target.value)}
          />
          <label className="form-label my-2">Gambar Cerita :</label>
          <input
            type="file"
            className="form-control"
            placeholder="gambar"
            //   onChange={(e) => setGambarCerita(e.target.files[0])}
          />
          <label className="form-label my-2">Audio Cerita :</label>
          <input
            type="file"
            className="form-control"
            placeholder="backsound"
            //   onChange={(e) => setAudioCerita(e.target.files[0])}
          />
          <label className="form-label my-2">Deskripsi Cerita :</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="deskripsi"
            //   value={deskripsiCerita}
            //   onChange={(e) => setDeskripsiCerita(e.target.value)}
            rows={10}
          />
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseEditModal}>
          Batal
        </Button>
        <Button variant="primary" onClick={handleCloseEditModal}>
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AdminEditModal;
