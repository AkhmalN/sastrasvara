import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { createCerita } from "../api/cerita";

import Swal from "sweetalert2";
import { ClipLoading } from "../components/Loader";

function AdminModal({ showModal, handleCloseModal }) {
  const [judulCerita, setJudulCerita] = useState("");
  const [deskripsiCerita, setDeskripsiCerita] = useState("");
  const [audioCerita, setAudioCerita] = useState(null);
  const [gambarCerita, setGambarCerita] = useState(null);
  const [loading, setLoading] = useState(false);

  function clearForm() {
    setJudulCerita("");
    setDeskripsiCerita("");
  }

  const handleTambahCerita = async () => {
    setLoading(true);
    const data = {
      judul: judulCerita,
      script: deskripsiCerita,
    };
    const response = await createCerita(data);
    if (response.status === 200) {
      Swal.fire({
        title: "Berhasil menambah cerita!",
        text: `Judul cerita ${judulCerita} berhasil ditambah`,
        icon: "success",
        confirmButtonText: "Close",
      });
      clearForm();
    }
    setLoading(false);
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <h2 className="mb-3">Tambah Cerita Baru</h2>

          <div className="mt-3">
            <label className="form-label my-2">Judul Cerita :</label>
            <input
              className="form-control"
              type="text"
              placeholder="judul"
              value={judulCerita}
              onChange={(e) => setJudulCerita(e.target.value)}
            />
            <label className="form-label my-2">Gambar Cerita :</label>
            <input
              type="file"
              className="form-control"
              placeholder="gambar"
              onChange={(e) => setGambarCerita(e.target.files[0])}
            />
            <label className="form-label my-2">Audio Cerita :</label>
            <input
              type="file"
              className="form-control"
              placeholder="backsound"
              onChange={(e) => setAudioCerita(e.target.files[0])}
            />
            <label className="form-label my-2">Deskripsi Cerita :</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="deskripsi"
              value={deskripsiCerita}
              onChange={(e) => setDeskripsiCerita(e.target.value)}
              rows={10}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleTambahCerita}>
            {loading ? <ClipLoading /> : "Tambah"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AdminModal;
