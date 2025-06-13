// import React from 'react';
// import { FaFilter, FaSyncAlt } from 'react-icons/fa';
// import { FiDownload, FiUserPlus } from 'react-icons/fi';

// // Base button style applied across all components
// const buttonBaseStyle = {
//   padding: '8px 16px',
//   border: '1px solid #e0e7ef',
//   borderRadius: '7px',
//   fontSize: '15px',
//   background: '#f7fafd',
//   outline: 'none',
//   cursor: 'pointer',
//   display: 'flex',
//   alignItems: 'center',
//   gap: '8px',
// };

// // 🔍 Search input component
// export const SearchInput = ({ placeholder = "Search...", value, onChange }) => (
//   <input
//     type="text"
//     placeholder={placeholder}
//     value={value}
//     onChange={onChange}
//     style={{
//       ...buttonBaseStyle,
//       minWidth: '180px',
//     }}
//   />
// );

// // ⚙️ Filter button
// export const FilterButton = ({ onClick }) => (
//   <button
//     onClick={() => {
//       if (onClick) {
//         onClick();
//       } else {
//         console.warn("FilterButton clicked but no handler passed.");
//       }
//     }}
//     style={buttonBaseStyle}
//   >
//     <FaFilter />
//     Filter
//   </button>
// );

// // ⬇️ Export button
// export const ExportButton = ({ onClick }) => (
//   <button
//     onClick={() => {
//       if (onClick) {
//         onClick();
//       } else {
//         console.warn("ExportButton clicked but no handler passed.");
//       }
//     }}
//     style={buttonBaseStyle}
//   >
//     <FiDownload />
//     Export
//   </button>
// );

// // ➕ Add User button
// export const AddUserButton = ({ onClick }) => (
//   <button
//     onClick={() => {
//       if (onClick) {
//         onClick();
//       } else {
//         console.warn("AddUserButton clicked but no handler passed.");
//       }
//     }}
//     style={{
//       ...buttonBaseStyle,
//       background: 'white',
//       border: '1px solid #3b82f6',
//       color: '#3b82f6',
//       fontWeight: '500',
//     }}
//   >
//     <FiUserPlus />
//     Add User
//   </button>
// );

// // 🔄 Refresh button
// export const RefreshButton = ({ onClick }) => (
//   <button
//     onClick={() => {
//       if (onClick) {
//         onClick();
//       } else {
//         console.warn("RefreshButton clicked but no handler passed.");
//       }
//     }}
//     style={{
//       ...buttonBaseStyle,
//       padding: '8px',
//       borderRadius: '7px',
//       width: '10px',
//       justifyContent: 'center',
//     }}
//     title="Refresh"
//   >
//     <FaSyncAlt />
//   </button>
// );




import React from 'react';
import { FaFilter, FaSyncAlt } from 'react-icons/fa';
import { FiDownload, FiUserPlus } from 'react-icons/fi';



// Base button style applied across all components
const buttonBaseStyle = {
  padding: '8px 16px',
  border: '1px solid #e0e7ef',
  borderRadius: '7px',
  fontSize: '15px',
  background: '#f7fafd',
  outline: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  height: '3vh'
};

// 🔍 Search input component
export const SearchInput = ({ placeholder = "Search...", value, onChange }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    style={{
      ...buttonBaseStyle,
      minWidth: '180px',
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
    style={buttonBaseStyle}
  >
    <FaFilter />
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
    style={buttonBaseStyle}
  >
    <FiDownload />
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
      ...buttonBaseStyle,
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
      ...buttonBaseStyle,
      padding: '8px',
      borderRadius: '7px',
      width: '38px',
      justifyContent: 'center',
    }}
    title="Refresh"
  >
    <FaSyncAlt />
  </button>
);