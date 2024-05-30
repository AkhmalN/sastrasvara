import { Table } from "react-bootstrap";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import AdminModal from "../layouts/AdminModal";
import { getAllCerita } from "../api/cerita";

function AdminDashboard() {
  const [username, setUsername] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [dataCerita, setDataCerita] = useState([]);
  const [loading, setLoading] = useState(false);

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
      if (response.status === 200) {
        setLoading(false);
        setDataCerita(response.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getCerita();
  }, []);

  return (
    <div className="container">
      {showModal && (
        <AdminModal showModal={showModal} handleCloseModal={handleCloseModal} />
      )}
      <h2>Selamat Datang {username}</h2>
      <div className="my-2">
        <button
          className="d-flex align-items-center btn btn-primary "
          onClick={handleShowModal}
        >
          <FaPlus color="#fff" />
        </button>
      </div>
      {loading && <p>Loading data cerita ...</p>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">No.</th>
            <th className="text-center">Gambar</th>
            <th className="text-center">Judul Cerita</th>
            <th className="text-center">Deskripsi Cerita</th>
            <th className="text-center">Backsound Cerita</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {dataCerita &&
            dataCerita.map((data) => {
              return (
                <tr key={data._id}>
                  <td>2</td>
                  <td>No Image</td>
                  <td>{data.judul ? data.judul : "-"}</td>
                  <td>{data.script ? data.script : "-"}</td>
                  <td>No Backsound</td>
                  <td>
                    <div className="icons d-flex justify-content-center">
                      <button className="btn btn-warning mx-1">
                        <FaEdit />
                      </button>
                      <button className="btn btn-danger  mx-1">
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
