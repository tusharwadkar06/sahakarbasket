import React from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { FiFilter } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';
import store from "../assets/images/store.png"
import AddNewMerchant from './AddNewMerchant';


const merchants = new Array(20).fill({
  storeImage: store,
  storeName: "Target Shop",
  merchantName: "Mrs. Sujal Patel",
  merchantId: "TAR01 -2025",
  businessType: "Electronics",
  gstin: "22AAAAA0000A1Z5",
  email: "example@email.com",
  phone: "9876543210",
  address: "Shivaji nagar, Pune",
  kycStatus: "Verified",
  documentation: "Done",
  storeStatus: "Active"
});



function Merchant() {  

  const navigate = useNavigate();


  return (
    <div className="merchant-container">
      <Breadcrumb
        paths={[
          { name: "Merchant", highlight: true }
        ]}
      />

      <div className="merchant-card">
        <div className="merchant-header">
          <h2>Merchant</h2>
          <div className="merchant-controls">
            <input type="text" placeholder="Search" className="search-box" />
            <button className="filter-btn"><FiFilter /> Filter</button>
            <select className="category-select">
              <option>Category</option>
              <option>Electronics</option>
            </select>
            <span className="total-product">Total Product - 2000</span>
            <button className="add-btn" onClick ={()=>{navigate('/addnewmerchant')}}><FaPlus /> Add New</button>
          </div>
        </div>

        <div className="merchant-table-container">
          <div className="merchant-table-wrapper">
            <table className="merchant-table">
              <thead>
                <tr>
                  <th>Store Image</th>
                  <th>Store Name</th>
                  <th>Merchant Name</th>
                  <th>Merchant ID</th>
                  <th>Business Type</th>
                  <th>GSTIN No.</th>
                  <th>Email ID</th>
                  <th>Phone No.</th>
                  <th>Business Address</th>
                  <th>KYC Status</th>
                  <th>Documentation</th>
                  <th>Store Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {merchants.map((m, i) => (
                  <tr key={i}>
                    <td><img src={m.storeImage} alt="store" className="store-img" /></td>
                    <td>{m.storeName}</td>
                    <td>{m.merchantName}</td>
                    <td>{m.merchantId}</td>
                    <td>{m.businessType}</td>
                    <td>{m.gstin}</td>
                    <td>{m.email}</td>
                    <td>{m.phone}</td>
                    <td>{m.address}</td>
                    <td><span className="status verified">{m.kycStatus}</span></td>
                    <td><span className="status done">{m.documentation}</span></td>
                    <td><span className="status active">{m.storeStatus}</span></td>
                    
                    <td>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <button className="edit-btn">✏️</button>
    <button className="delete-btn">🗑️</button>
  </div>
</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* <div className="merchant-pagination">
          <select>
            <option>05</option>
            <option>10</option>
            <option>20</option>
          </select>
          <div className="page-controls">
            <span>Page 1</span>
            <button>{'<<'} Previous</button>
            <button>Next {'>>'}</button>
          </div>
        </div> */}
      </div>

      <style>{`
        .merchant-container {
          padding: 4px;
          max-width: 84%;
          
        }

        .merchant-card {
          background: #fff;
          border-radius: 8px;
          padding: 2px;
          box-shadow: 0 0 5px rgba(0,0,0,0.1);
          margin: 10px;
          margin-left: 0px;
          padding: 10px;
          width: 97%;
          height: 83vh;
          //max-width: 100%;
          
        }

        .merchant-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 15px;
          margin-top: 0px;
          margin: 10px;
          gap: 10px;
          width: 99%%;
        }

        .merchant-controls {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
         
        }

        .search-box, .category-select {
          padding: 6px 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          border: 1px solid #ccc;
          background: #f9f9f9;
          padding: 6px 10px;
          border-radius: 4px;
          cursor: pointer;
        }

        .total-product {
          background: #e0f0ff;
          padding: 6px 10px;
          border-radius: 4px;
          font-weight: bold;
          color: #007bff;
        }

        .add-btn {
          background: #007bff;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .merchant-table-container {
          overflow-x: auto;
          padding-top: 0px;
          //width: 82%;
          width: 100%
          height: 90vh;
        }

        .merchant-table-wrapper {
         height: 70vh; 
         
          overflow-y: scroll; 
          overflow-x: auto;
        }

        .merchant-table {
          width: 100%;
          border-collapse: collapse ;
          min-width: 1500px;
          overflow-x: auto;
          overflow-y:hidden;
          border-top: 1px solid #000;
        }

        .merchant-table th, .merchant-table td {
          border: 1px solid #9b9b9b;
          padding: 10px;
          text-align: left;
        }

        .merchant-table th {
          background: #f1f7ff;
          position: sticky;
          top: 0;
          z-index: 1;
        }

        .store-img {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }

        .merchant-pagination {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
        }

        .page-controls {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .page-controls button {
          padding: 5px 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background: #f9f9f9;
          cursor: pointer;
        }

        .status {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: bold;
          display: inline-block;
        }

        .status.verified {
          background-color: #e6ffed;
          color: green;
        }

        .status.done {
          background-color: #e6f7ff;
          color: #1890ff;
        }

        .status.active {
          background-color: #f6ffed;
          color: #52c41a;
        }

        .edit-btn, .delete-btn {
          border: none;
          background: none;
          cursor: pointer;
          margin: 0 4px;
          font-size: 16px;
          
          
        }
      `}</style>
    </div>
  );
}

export default Merchant;
