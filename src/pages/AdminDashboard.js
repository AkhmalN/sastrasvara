import { Button, Form, InputGroup, Table } from "react-bootstrap";
import { FaEdit, FaEye, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import AdminModal from "../layouts/AdminModal";
import { getAllCerita } from "../api/cerita";
import AdminReadModal from "../layouts/AdminReadModal";
import AdminEditModal from "../layouts/AdminEditModal";
import AdminDeleteModal from "../layouts/AdminDeleteModal";
import { getImageLink, getEmbedUrl } from "../utils/ConvertLink";

function AdminDashboard() {
  const [username, setUsername] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [dataCerita, setDataCerita] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getCerita = async () => {
    setLoading(true);
    try {
      const response = await getAllCerita();
      console.log(response);
      if (response.status === 200) {
        setLoading(false);
        setDataCerita(response.data);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    getCerita();
  }, []);

  const [showReadModal, setShowReadModal] = useState(false);
  const handleCloseReadModal = () => setShowReadModal(false);
  const handleShowReadModal = () => setShowReadModal(true);

  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = () => setShowEditModal(true);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleShowDeleteModal = () => setShowDeleteModal(true);

  return (
    <div className="admin container">
      {showModal && (
        <AdminModal showModal={showModal} handleCloseModal={handleCloseModal} />
      )}
      <h2>Selamat Datang {username}!</h2>
      <br />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <InputGroup>
          <Form.Control placeholder="Cari Judul Cerita" />
          <Button variant="outline-secondary">
            <FaSearch />
          </Button>
        </InputGroup>

        <Button onClick={handleShowModal}>
          <FaPlus color="#fff" />
        </Button>
      </div>

      {loading && <p>Loading data cerita ...</p>}
      {errorMessage && <p>{errorMessage}</p>}
      <Table striped bordered>
        <thead>
          <tr>
            <th className="text-center">No.</th>
            <th className="text-center">Judul Cerita</th>
            <th className="text-center">Gambar Cerita</th>
            <th className="text-center">Audio Cerita</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {dataCerita &&
            dataCerita.map((data) => {
              return (
                <tr key={data._id}>
                  <td>1</td>
                  <td>{data.judul ? data.judul : "-"}</td>
                  <td>
                    {data.image ? (
                      <img
                        src={getImageLink(data.image)}
                        width={100}
                        height={100}
                      />
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>
                    {data.audio ? (
                      <iframe
                        title="audio player"
                        width="500"
                        height="60"
                        src={getEmbedUrl(data.audio)}
                        frameborder="0"
                        allowfullscreen
                      ></iframe>
                    ) : (
                      "Tidak dapat mengambil data audio"
                    )}
                  </td>
                  <td>
                    <div className="icons d-flex justify-content-center">
                      {showReadModal && (
                        <AdminReadModal
                          showReadModal={handleShowReadModal}
                          handleCloseReadModal={handleCloseReadModal}
                        />
                      )}
                      <Button
                        className="btn btn-warning mx-1"
                        onClick={handleShowReadModal}
                      >
                        <FaEye />
                      </Button>

                      {showEditModal && (
                        <AdminEditModal
                          showEditModal={handleShowEditModal}
                          handleCloseEditModal={handleCloseEditModal}
                        />
                      )}
                      <button
                        className="btn btn-warning mx-1"
                        onClick={handleShowEditModal}
                      >
                        <FaEdit />
                      </button>

                      {showDeleteModal && (
                        <AdminDeleteModal
                          showDeleteModal={handleShowDeleteModal}
                          handleCloseDeleteModal={handleCloseDeleteModal}
                        />
                      )}
                      <button
                        className="btn btn-danger  mx-1"
                        onClick={handleShowDeleteModal}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminDashboard;
