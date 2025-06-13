import React from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const merchants = [
  { name: "Takeaway", contact: "91+ 7894561231", category: "Goods", status: "Active" },
  { name: "Takeaway", contact: "91+ 7894561231", category: "Goods", status: "Active" },
  { name: "Takeaway", contact: "91+ 7894561231", category: "Goods", status: "Active" },
  { name: "Takeaway", contact: "91+ 7894561231", category: "Goods", status: "Active" },
  { name: "Takeaway", contact: "91+ 7894561231", category: "Goods", status: "Active" },
  { name: "Takeaway", contact: "91+ 7894561231", category: "Goods", status: "Active" },
  { name: "Takeaway", contact: "91+ 7894561231", category: "Services", status: "Inactive" },
  { name: "Takeaway", contact: "91+ 7894561231", category: "Services", status: "Inactive" },
  { name: "Takeaway", contact: "91+ 7894561231", category: "Services", status: "Inactive" },
  { name: "Takeaway", contact: "91+ 7894561231", category: "Services", status: "Inactive" },
];

const MerchantList = () => {
  const navigate = useNavigate();

  const breadcrumbPaths = [
    { name: "Home" },
    { name: "Merchant List", highlight: true },
    
  ];

  return (
    <div>
      <Breadcrumb paths={breadcrumbPaths} />
      <div className="merchantlist-main">
        <div className="merchantlist-toolbar">
          <h2 className="merchantlist-title">Merchant List</h2>
          <div className="merchantlist-toolbar-buttons">
            <input type="text" className="search-input" placeholder="Search..." />
            <button className="btn btn-light">Filter</button>
            <button className="btn btn-light">Export</button>
            <button className="btn btn-primary">Add User</button>
            <button className="btn btn-light">⟳</button>
          </div>
        </div>
        <div className="merchantlist-table-wrapper">
          {/* Table header */}
          <table className="merchantlist-table merchantlist-table-header">
            <colgroup>
              <col style={{width: "40px"}} />
              <col style={{width: "220px"}} />
              <col style={{width: "180px"}} />
              <col style={{width: "140px"}} />
              <col style={{width: "120px"}} />
              <col style={{width: "160px"}} />
            </colgroup>
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th><span role="img" aria-label="Merchant">🏷️</span> Merchant Name</th>
                <th><span role="img" aria-label="Contact">📞</span> Contact</th>
                <th><span role="img" aria-label="Category">📋</span> Category</th>
                <th><span role="img" aria-label="Status">🟢</span> Status</th>
                <th><span role="img" aria-label="Action">⚙️</span> Action</th>
              </tr>
            </thead>
          </table>
          {/* Table body with scroll */}
          <div className="merchantlist-table-body-wrapper">
            <table className="merchantlist-table merchantlist-table-body">
              <colgroup>
                <col style={{width: "40px"}} />
                <col style={{width: "220px"}} />
                <col style={{width: "180px"}} />
                <col style={{width: "140px"}} />
                <col style={{width: "120px"}} />
                <col style={{width: "160px"}} />
              </colgroup>
              <tbody>
                {merchants.map((m, index) => (
                  <tr key={index}>
                    <td><input type="checkbox" /></td>
                    <td className="merchant-link" onClick={() => navigate("/merchantInfo")}>{m.name}</td>
                    <td>{m.contact}</td>
                    <td>{m.category}</td>
                    <td>
                      <span className={`status ${m.status === "Active" ? "active" : "inactive"}`}>
                        <span className="dot" /> {m.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn-sm"><span role="img" aria-label="Edit">✏️</span> Edit</button>
                      <button className="btn-sm"><span role="img" aria-label="View">👁️</span> View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
       
      </div>
      <style>{`
        .breadcrumb {
          margin: 2px 0 14px 0;
          font-size: 14px;
          color: #7b7b7b;
        }
        .breadcrumb .highlight {
          color: #2979ff;
          font-weight: 500;
        }
        .merchantlist-main {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          padding: 24px 20px 18px 20px;
          display: flex;
          flex-direction: column;
          min-width: 0;
          margin: 0px 0px;
        }
        .merchantlist-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0px;
          padding-top: 0px;
          flex-wrap: wrap;
        }
        .merchantlist-title {
          font-size: 24px;
          font-weight: 700;
          color: #222;
          padding: 2px;
          margin: 2px;
        }
        .merchantlist-toolbar-buttons {
          display: flex;
          gap: 10px;
          align-items: center;
          flex-wrap: wrap;
        }
        .search-input {
          padding: 8px 16px;
          border: 1px solid #e0e7ef;
          border-radius: 7px;
          font-size: 15px;
          background: #f7fafd;
          outline: none;
          min-width: 180px;
        }
        .btn {
          padding: 8px 18px;
          border-radius: 7px;
          border: 1px solid #e0e7ef;
          background: #fff;
          font-size: 15px;
          cursor: pointer;
          transition: background 0.15s;
        }
        .btn-light {
          background: #f7fafd;
        }
        .btn-primary {
          background: #2979ff;
          color: #fff;
          border: none
        }
        .btn-primary:hover {
          background: #155ec5;
        }
        .merchantlist-table-wrapper {
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          background: #f9fbfd;
          margin-bottom: 0px;
          margin-top: 2px;
          overflow-x: auto;
        }
        .merchantlist-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          min-width: 900px;
          background: #fff;
          table-layout: fixed;
        }
        .merchantlist-table-header {
          border-bottom: none;
          table-layout: fixed;
        }
        .merchantlist-table-body {
          table-layout: fixed;
        }
        .merchantlist-table th, .merchantlist-table td {
          padding: 13px 10px;
          border-bottom: 1px solid #e5e7eb;
          text-align: left;
          font-size: 15px;
          box-sizing: border-box;
        }
        .merchantlist-table th {
          color: #222;
          font-weight: 600;
          background: #eaf4ff;
        }
        .merchantlist-table-body-wrapper {
          max-height: 450px; /* Adjust as needed */
          overflow-y: auto;
          overflow-x: hidden;
        }
        .merchant-link {
          color: #2979ff;
          cursor: pointer;
          font-weight: 500;
        }
        .merchant-link:hover {
          text-decoration: underline;
        }
        .status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 2px 14px 2px 8px;
          border-radius: 10px;
          border: 1px solid #e0e7ef;
          font-size: 14px;
          font-weight: 500;
        }
        .status .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 5px;
          background: #bbb;
        }
        .status.active .dot {
          background: #22c55e;
        }
        .status.inactive .dot {
          background: #ef4444;
        }
        .status.active {
          color: #22c55e;
          border-color: #b6f5d8;
          background: #f0fdf4;
        }
        .status.inactive {
          color: #ef4444;
          border-color: #fbcaca;
          background: #fef2f2;
        }
        .btn-sm {
          margin-right: 6px;
          padding: 5px 12px;
          font-size: 14px;
          border: 1px solid #e0e7ef;
          border-radius: 5px;
          background: #fff;
          cursor: pointer;
          transition: background 0.15s;
        }
        .btn-sm:last-child {
          margin-right: 0;
        }
        .btn-sm:hover {
          background: #f7fafd;
        }
        .merchantlist-bottom-controls {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        .page-size {
          padding: 7px 12px;
          border-radius: 6px;
          border: 1px solid #e0e7ef;
          background: #f7fafd;
          font-size: 15px;
        }
        .pagination {
          font-size: 15px;
          color: #222;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .page-btn {
          background: #fff;
          border: 1px solid #e0e7ef;
          border-radius: 5px;
          padding: 5px 14px;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.15s;
        }
        .page-btn:hover {
          background: #f7fafd;
        }
        @media (max-width: 900px) {
          .merchantlist-main {
            padding: 10px 2px;
          }
        }
        @media (max-width: 600px) {
          .merchantlist-toolbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .merchantlist-table-wrapper {
            min-width: 0;
          }
          .merchantlist-table {
            min-width: 600px;
          }
        }
      `}</style>
    </div>
  );
};

export default MerchantList;