import React from 'react';
import { CiFilter } from 'react-icons/ci';
import { FaFilter, FaSyncAlt } from 'react-icons/fa';
import { FiDownload, FiUserPlus,FiEye  } from 'react-icons/fi';
import { IoCloudDownloadOutline } from "react-icons/io5";
import { GrEdit } from "react-icons/gr";
  

// 🔍 Search input component
export const SearchInput = ({ placeholder = "Search...", value, onChange }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    style={{
      padding: '6px 10px',
          border: '1px solid #e0e7ef',
          borderRadius: '4px'

 
    }}
  />
);



// ⚙️ Filter button
export const FilterButton = ({ onClick }) => (
  <button
    onClick={() => {
      if (onClick) {
        onClick();
      } else {
        console.warn("FilterButton clicked but no handler passed.");
      }
    }}
    style={{
       display: 'flex',
  alignItems: 'center',
  gap: '5px',
  border: '1px solid #ccc',
  background: '#f9f9f9',
  padding: '6px 10px',
  borderRadius: '4px',
  cursor: 'pointer'

 
    }}
   
  >
    <CiFilter />
    Filter
  </button>
);

// ⬇️ Export button
export const ExportButton = ({ onClick }) => (
  <button
    onClick={() => {
      if (onClick) {
        onClick();
      } else {
        console.warn("ExportButton clicked but no handler passed.");
      }
    }} 

    style={{
  
      background: "#f5f5f5",
    color: "#222",
    border: "1px solid #ddd",
    borderRadius: 6,
    padding: "6px 18px",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    gap: 6,
    cursor: "pointer"
    }}
  >
    <IoCloudDownloadOutline />
    Export
  </button>
);

// ➕ Add User button


export const AddUserButton = ({ onClick, label = "Add User" }) => (
  <button
    onClick={() => {
      if (onClick) {
        onClick();
      } else {
        console.warn("AddUserButton clicked but no handler passed.");
      }
    }}
    style={{
  
      background: 'white',
      border: '1px solid #3b82f6',
      color: '#3b82f6',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '5px', // spacing between icon and label
      padding: '6px 12px',
      borderRadius: '6px',
      cursor: 'pointer',
    }}
  >
    <FiUserPlus />
    {label}
  </button>
);



// 🔄 Refresh button
export const RefreshButton = ({ onClick }) => (
  <button
    onClick={() => {
      if (onClick) {
        onClick();
      } else {
        console.warn("RefreshButton clicked but no handler passed.");
      }
    }}
    style={{
      padding: '9px',
      borderRadius: '4px',
      height: '5vh',
      backgroundColor: '#4386d3', // blue background
      color: 'white',             // ✅ correct property
      width: '38px',
      justifyContent: 'center',
    }}
    title="Refresh"
  >
    <FaSyncAlt />
  </button>
);



// 🔄 Save button
export const SaveButton = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    height: "5vh"
    }}
  >
    Save
  </button>
);




// ➕ Add New Product button
export const AddNewProductButton = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: "8px 16px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "15px",
    }}
  >
    Add New Product
  </button>
);



export const EditButton = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      border: '1px solid #ccc',
      background: '#FFFFFF',
      padding: '6px 12px',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: 500,
      color: '#333',
      cursor: 'pointer',
    }}
  >
    <GrEdit size={14} />
    Edit
  </button>
);



//View Button
export const ViewButton = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      border: '1px solid #ccc',
      background: '#FFFFFF',
      padding: '6px 12px',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: 500,
      color: '#333',
      cursor: 'pointer',
    }}
  >
    <FiEye />
    View
  </button>
);
