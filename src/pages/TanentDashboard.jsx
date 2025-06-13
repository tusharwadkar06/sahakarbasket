import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';

function TenantDashboard() {
  const tenants = [
    { id: 1, cluster: 'Pune', name: 'Name', tenantId: '', status: '' },
    { id: 2, cluster: 'Pune', name: 'Name', tenantId: '', status: '' },
    { id: 3, cluster: 'Pune', name: 'Name', tenantId: '', status: '' },
    { id: 4, cluster: 'Pune', name: 'Name', tenantId: '', status: '' },
    { id: 5, cluster: 'Pune', name: 'Name', tenantId: '', status: '' },
  ];

  return (
    <div>
      <Breadcrumb paths={[{ name: "Home" }, { name: "Tenant", highlight: true }]} />

      <div className="container">
     
        <div className="tenant-toolbar">
          <h2 className="title">Tenant</h2>
          <div className="toolbar-right">
            <input type="text" placeholder="🔍 Search" className="search-input" />
            <button className="add-btn">+ Add</button>
          </div>
        </div>

      
        <table className="tenant-table">
          <thead>
            <tr>
              <th>Cluster</th>
              <th>Name</th>
              <th>Tenant ID</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant) => (
              <tr key={tenant.id}>
                <td>{tenant.cluster}</td>
                <td>{tenant.name}</td>
                <td>{tenant.tenantId}</td>
                <td>{tenant.status}</td>
                <td className="action-icons">
                  <button className="edit-btn"><FaEdit /></button>
                  <button className="delete-btn"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <span>Page 1</span>
          <button>&laquo; Previous</button>
          <button>Next &raquo;</button>
        </div>

        <style>{`
          .container {
            padding: 20px;
            font-family: Arial, sans-serif;
            background-color: #ffffff;
          }

          .tenant-toolbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            gap: 20px;
            flex-wrap: wrap;
          }
          .title {
            font-size: 24px;
            margin-bottom: 0;
          }
          .toolbar-right {
            display: flex;
            gap: 10px;
            align-items: center;
          }
          .search-input {
            padding: 6px 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            width: 250px;
          }
          .add-btn {
            background-color: #007bff;
            color: white;
            padding: 6px 12px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          .tenant-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 15px;
            background-color: white;
          }
          .tenant-table th,
          .tenant-table td {
            padding: 10px;
            border: 1px solid #9b9b9b;
            text-align: left;
          }
          .tenant-table th {
            background-color: #f1f1f1;
          }
          .action-icons button {
            background: none;
            border: none;
            cursor: pointer;
            margin-right: 8px;
            font-size: 16px;
          }
          .edit-btn {
            color: #007bff;
          }
          .delete-btn {
            color: #dc3545;
          }
          .pagination {
            display: flex;
            gap: 10px;
            align-items: center;
          }
          .pagination button {
            background: none;
            border: none;
            color: #007bff;
            cursor: pointer;
          }
          @media (max-width: 700px) {
            .tenant-toolbar {
              flex-direction: column;
              align-items: flex-start;
              gap: 10px;
            }
            .toolbar-right {
              width: 100%;
              justify-content: flex-start;
            }
            .search-input {
              width: 100%;
              min-width: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default TenantDashboard;