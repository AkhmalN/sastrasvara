import { Table } from "react-bootstrap";
import { FaEdit, FaFolderPlus, FaTrash } from "react-icons/fa";

function AdminDashboard() {
  return (
    <div className="admin">
      <h2>Selamat Datang "USERNAME ADMIN"!</h2>
      <button><FaFolderPlus size={30} color="blue" /></button>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Judul Cerita</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className="d-flex justify-content-between">
              Legenda Aji Saka
              <div className="icons">
                <button><FaEdit /></button>
                <button><FaTrash /></button>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td className="d-flex justify-content-between">
              Asal Usul Coban Rondo
              <div className="icons">
                <button><FaEdit /></button>
                <button><FaTrash /></button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AdminDashboard;
