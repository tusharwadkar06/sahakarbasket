import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Breadcrumb from '../components/Breadcrumb';

const SocietyUser  = () => {
  const [societies, setSocieties] = useState([
    { cluster: 'Pune', branch: 'Name', username: '', mobile: '', address: '', pincode: '' },
    { cluster: 'Pune', branch: 'Name', username: '', mobile: '', address: '', pincode: '' },
    { cluster: 'Pune', branch: 'Name', username: '', mobile: '', address: '', pincode: '' },
    { cluster: 'Pune', branch: 'Name', username: '', mobile: '', address: '', pincode: '' },
    { cluster: 'Pune', branch: 'Name', username: '', mobile: '', address: '', pincode: '' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    cluster: '',
    branch: '',
    username: '',
    mobile: '',
    address: '',
    pincode: '',
  });

   // Breadcrumb paths
   const breadcrumbPaths = [
    { name: "SocietyUser" },
    
  ];

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setSocieties([...societies, form]);
    setForm({ cluster: '', branch: '', username: '', mobile: '', address: '', pincode: '' });
    setShowModal(false);
  };

  return (
    <>
      <Breadcrumb paths={breadcrumbPaths} />
    
    <div className="container">
      <h2 className="title">Society User</h2>
      <div className="header-right">
        <input type="text" placeholder="🔍 Search" className="search-input" />
        <button className="add-btn" onClick={() => navigate('/addnewsocietyuser')}>+ Add</button>
      </div>

      <table className="society-table">
        <thead>
          <tr>
            <th>Cluster</th>
            <th>Society Branch Name</th>
            <th>User Name</th>
            <th>Mobile No.</th>
            <th>Office Address</th>
            <th>Pin code</th>
          </tr>
        </thead>
        <tbody>
          {societies.map((s, i) => (
            <tr key={i}>
              <td>{s.cluster}</td>
              <td>{s.branch}</td>
              <td>{s.username}</td>
              <td>{s.mobile}</td>
              <td>{s.address}</td>
              <td>{s.pincode}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <select>
          <option>05</option>
          <option>10</option>
          <option>15</option>
        </select>
        <div className="pagination-controls">
          <button>⟪</button>
          <button>Previous</button>
          <span>Page 1</span>
          <button>Next</button>
          <button>⟫</button>
        </div>
      </div>

      
     
      <style>
        {`
          .container {
            padding: 20px;
            padding-top: 10px;
            margin-top: 25px;
            font-family: 'Poppins', sans-serif;
            background-color: #ffffff;
            height: 90%;
          }

          .title {
           margin-bottom: 10px;
            font-size: 22px;
            font-weight: 600 bold;
          }

          .header-right {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-bottom: 10px;
          }

          .search-input {
            padding: 8px 12px;
            width: 250px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .add-btn {
            background-color: #2563eb;
            color: white;
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          .society-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 0px;
          }

          .society-table th,
          .society-table td {
            border: 1px solid #9b9b9b;
            padding: 10px;
            text-align: center;
          }

          .society-table thead {
            background-color: #e0f2fe;
            font-weight: bold;
          }

          .pagination {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
          }

          .pagination select {
            padding: 4px 8px;
            border-radius: 4px;
            border: 1px solid #ccc;
          }

          .pagination-controls {
            display: flex;
            gap: 10px;
            align-items: center;
          }

          .modal-backdrop {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .modal {
            background: white;
            padding: 20px;
            border-radius: 8px;
            width: 350px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .modal input {
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .modal-actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
          }

          .cancel-btn {
            background-color: #ccc;
            padding: 6px 12px;
            border: none;
            border-radius: 4px;
          }

          .save-btn {
            background-color: #2563eb;
            color: white;
            padding: 6px 12px;
            border: none;
            border-radius: 4px;
          }
        `}
      </style>
    </div>
    </>
  );
};

export default SocietyUser;

