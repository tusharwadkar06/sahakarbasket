

import React, { useState, useMemo } from 'react';
import { FiSearch, FiDownload, FiRefreshCw, FiEye } from 'react-icons/fi';
import Breadcrumb from '../components/Breadcrumb'; 
import { RefreshButton,FaFilter, FilterButton, ExportButton, AddUserButton} from '../components/ActionButton';


const Buyerlist = () => {
  const initialBuyers = useMemo(() =>
    Array(15).fill({}).map((_, i) => ({
      name: `Buyer ${i + 1}`,
      id: `1023${i}`,
      contact: `91+ 789456123${i}`,
      status: i % 3 === 0 ? 'Inactive' : 'Active',
    })), []);

  const [buyers] = useState(initialBuyers);
  const [selected, setSelected] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const { totalPages, currentBuyers } = useMemo(() => {
    const totalPages = Math.ceil(buyers.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const currentBuyers = buyers.slice(start, start + itemsPerPage);
    return { totalPages, currentBuyers };
  }, [buyers, currentPage, itemsPerPage]);

  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(currentBuyers.map((b) => b.id));
    } else {
      setSelected([]);
    }
  };

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const Breadcrumbpaths = [
    { name: "Home", to: "/dashboard" },
    { name: "Buyer List" }
  ];

  return (
    <div style={container}>
      <Breadcrumb paths={Breadcrumbpaths} />
      <div style={card}>
        <div style={header}>
          <div style={title}>Buyer List</div>
          <div style={actionRow}>
            <div style={{ position: 'relative' }}>
              <FiSearch style={searchIcon} />
              <input
                placeholder="Search"
                style={searchInput}
              />
            </div>
            {/* <button style={btnStyle}><FiFilter /> Filter</button> */}
            <FilterButton />

            {/* <button style={btnStyle}><FiDownload /> Export</button> */}
            <ExportButton/>
            {/* <button style={{ ...btnStyle, backgroundColor: '#eef6ff', border: '1px solid #007bff', color: '#007bff' }}>
              Add User
            </button> */}

            <AddUserButton/>
            {/* <button style={circleButtonStyle}><FiRefreshCw /></button> */}
            <RefreshButton/>
          </div>
        </div>

        {/* Scrollable container for mobile */}
        <div style={scrollWrapper}>
          <table style={tableStyle}>
            <thead>
              <tr style={theadRow}>
                <th style={{ ...thStyle, width: '20%' }}>
                  <input
                    type="checkbox"
                    checked={selected.length === currentBuyers.length && currentBuyers.length > 0}
                    onChange={toggleSelectAll}
                    style={{ marginRight: 8 }}
                  />
                  Buyer Name
                </th>
                <th style={{ ...thStyle, width: '18%' }}>ID</th>
                <th style={{ ...thStyle, width: '20%' }}>Contact</th>
                <th style={{ ...thStyle, width: '15%' }}>Status</th>
                <th style={{ ...thStyle, width: '20%' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentBuyers.map((buyer) => (
                <tr key={buyer.id} style={tbodyRow}>
                  <td style={tdStyle}>
                    <input
                      type="checkbox"
                      checked={selected.includes(buyer.id)}
                      onChange={() => toggleSelect(buyer.id)}
                      style={{ marginRight: 8 }}
                    />
                    {buyer.name}
                  </td>
                  <td style={tdStyle}>{buyer.id}</td>
                  <td style={tdStyle}>{buyer.contact}</td>
                  <td style={tdStyle}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '4px 8px',
                      backgroundColor: buyer.status === 'Active' ? '#e6f9f0' : '#fcebea',
                      color: buyer.status === 'Active' ? '#28a745' : '#dc3545',
                      borderRadius: 20,
                      fontSize: 13,
                      whiteSpace: 'nowrap',
                    }}>
                      <span style={{
                        height: 8,
                        width: 8,
                        backgroundColor: buyer.status === 'Active' ? '#28a745' : '#dc3545',
                        borderRadius: '50%',
                        display: 'inline-block',
                      }} />
                      {buyer.status}
                    </span>
                  </td>
                  <td style={tdStyle}>
                    <div style={{ display: 'flex', gap: 16 }}>
                      <button  style={actionBtn}><RefreshButton /> Edit</button>
                      <button style={actionBtn}><FiEye /> View</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={paginationWrapper}>
          <select style={paginationSelect} value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
          </select>
          <div style={{ display: 'flex', gap: 10 }}>
            <span>Page {currentPage} of {totalPages}</span>
            <button style={pageBtn} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <button style={pageBtn} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Inline Style Definitions ---

const container = {
  marginTop: '-10px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '8px',
};

const card = {
  padding: 16,
  background: '#fff',
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
};

const header = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 12,
  marginBottom: 12,
};

const title = {
  fontSize: 22,
  fontWeight: 'bold',
};

const actionRow = {
  display: 'flex',
  gap: 8,
  flexWrap: 'wrap',
  alignItems: 'center',
};

const searchInput = {
  height: '12px',
  width: '180px',
  padding: '8px 12px 8px 30px',
  border: '1px solid #ccc',
  borderRadius: 6,
  outline: 'none',
};

const searchIcon = {
  position: 'absolute',
  top: 7,
  left: 8,
  color: '#888',
 
};

const scrollWrapper = {
  overflowX: 'auto',
  border: '1px solid #eee',
  borderRadius: 4,
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: 14,
  minWidth: 600,
};

const thStyle = {
  padding: '10px 16px',
  fontWeight: 600,
  whiteSpace: 'nowrap',
  borderBottom: '1px solid #eee',
  background: '#f1f5fb',
  position: 'sticky',
  top: 0,
  zIndex: 1,
};

const tdStyle = {
  padding: '10px 16px',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
};

const theadRow = {
  background: '#f1f5fb',
  textAlign: 'left',
};

const tbodyRow = {
  borderBottom: '1px solid #eee',
};

const btnStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  padding: '6px 12px',
  border: '1px solid #ccc',
  borderRadius: 6,
  background: '#fff',
  cursor: 'pointer',
  height: '30px',
  fontSize: 14,
  color: '#333',
};

const circleButtonStyle = {
  border: '1px solid #ccc',
  background: '#fff',
  padding: 8,
  height: '30px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#333',
};

const actionBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '6px 10px',
  gap: 6,
  borderRadius: 6,
  border: '1px solid #ccc',
  backgroundColor: '#fff',
  fontSize: 13,
  cursor: 'pointer',
};

const paginationWrapper = {
  marginTop: 16,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: 14,
  flexWrap: 'wrap',
  gap: 10,
};

const paginationSelect = {
  padding: '6px 10px',
  borderRadius: 6,
  border: '1px solid #ccc',
  outline: 'none',
};

const pageBtn = {
  padding: '4px 12px',
  borderRadius: 6,
  border: '1px solid #ccc',
  background: '#fff',
  cursor: 'pointer',
  color: '#333',
};

export default Buyerlist;
