

import React, { useState, useEffect } from "react";
import { FiFilter, FiDownload, FiRefreshCw } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const initialTransactions = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    date: "02/09/2025",
    buyerName: "Name",
    paymentMethod: ["UPI", "Card", "Wallet"][i % 3],
    discount: "50% - New Year",
    amount: 1254,
    status: ["Success", "Pending", "Fail"][i % 3],
  }));

  useEffect(() => {
    setTransactions(initialTransactions);
  }, []);

  const handleRefresh = () => setTransactions(initialTransactions);
  const handleExport = () => alert("Exporting transactions...");
  const handleFilter = () => alert("Open filter options...");

  const filteredTransactions = transactions.filter((txn) =>
    txn.buyerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const getStatusStyle = (status) => {
    const base = {
      padding: "4px 14px",
      borderRadius: "6px",
      fontWeight: 600,
      fontSize: "14px",
      display: "inline-block",
      textAlign: "center",
      whiteSpace: "nowrap",
    };
    switch (status) {
      case "Pending":
        return { ...base, backgroundColor: "#FACC15", color: "black" };
      case "Success":
        return { ...base, backgroundColor: "#22C55E", color: "white" };
      case "Fail":
        return { ...base, backgroundColor: "#EF4444", color: "white" };
      default:
        return base;
    }
  };

  const getNextStatus = (status) =>
    status === "Pending" ? "Success" : status === "Success" ? "Fail" : "Pending";

  const handleStatusClick = (id) => {
    const updated = transactions.map((t) =>
      t.id === id ? { ...t, status: getNextStatus(t.status) } : t
    );
    setTransactions(updated);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedIds([]);
    } else {
      const currentPageIds = currentItems.map((txn) => txn.id);
      setSelectedIds(currentPageIds);
    }
    setSelectAll(!selectAll);
  };

  const handleSelectOne = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds((prev) => prev.filter((item) => item !== id));
    } else {
      setSelectedIds((prev) => [...prev, id]);
    }
  };

  useEffect(() => {
    const currentPageIds = currentItems.map((txn) => txn.id);
    const allSelected = currentPageIds.every((id) => selectedIds.includes(id));
    setSelectAll(allSelected);
  }, [selectedIds, currentItems]);

  return (
    <div style={{ padding: "20px", backgroundColor: "#F9FAFB" }}>
      <NavLink to="/home">Home &gt; Transaction</NavLink>

      {/* Header */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px 12px 0 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 20px",
          boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <h2 style={{ margin: 0 }}>Transactions</h2>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: "8px 20px",
              borderRadius: 6,
             
              fontSize: 14,
            }}
          />
          <button style={{ width: 80 }} onClick={handleFilter}>
            <FiFilter /> Filter
          </button>
          <button style={{ width: 80 }} onClick={handleExport}>
            <FiDownload /> Export
          </button>
          <button
            style={{
              width: 35,
              backgroundColor: "#3B82F6",
              color: "white",
              borderRadius: 6,
            }}
            onClick={handleRefresh}
          >
            <FiRefreshCw />
          </button>
        </div>
      </div>

      {/* Table Wrapper */}
      <div
        style={{
          overflowX: "auto",
          overflowY: "auto",
          maxHeight: "60vh",
          border: "1px solid #E5E7EB",
          borderRadius: "0 0 12px 12px",
          backgroundColor: "white",
        }}
      >
        <table
          style={{
            width: "100%",
            minWidth: "800px",
            borderCollapse: "collapse",
          }}
        >
          <thead style={{ backgroundColor: "#3BA2FF1F" }}>
            <tr>
              <th style={{ padding: "12px", textAlign: "left", whiteSpace: "nowrap" }}>
                <input
                  type="checkbox"
                  style={{ marginRight: 8 }}
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
                Date
              </th>
              <th style={{ padding: "12px", textAlign: "left", whiteSpace: "nowrap" }}>Buyer Name</th>
              <th style={{ padding: "12px", textAlign: "left", whiteSpace: "nowrap" }}>Payment</th>
              <th style={{ padding: "12px", textAlign: "left", whiteSpace: "nowrap" }}>Discount</th>
              <th style={{ padding: "12px", textAlign: "left", whiteSpace: "nowrap" }}>Amount</th>
              <th style={{ padding: "12px", textAlign: "left", whiteSpace: "nowrap" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((txn) => (
              <tr
                key={txn.id}
                style={{
                  borderBottom: "1px solid #E5E7EB",
                  backgroundColor: "white",
                }}
              >
                <td style={{ padding: "12px", whiteSpace: "nowrap" }}>
                  <input
                    type="checkbox"
                    style={{ marginRight: 8 }}
                    checked={selectedIds.includes(txn.id)}
                    onChange={() => handleSelectOne(txn.id)}
                  />
                  {txn.date}
                </td>
                <td style={{ padding: "12px", whiteSpace: "nowrap" }}>{txn.buyerName}</td>
                <td style={{ padding: "12px", whiteSpace: "nowrap" }}>{txn.paymentMethod}</td>
                <td style={{ padding: "12px", whiteSpace: "nowrap" }}>{txn.discount}</td>
                <td style={{ padding: "12px", whiteSpace: "nowrap" }}>₹{txn.amount}</td>
                <td style={{ padding: "12px", whiteSpace: "nowrap" }}>
                  <span
                    onClick={() => handleStatusClick(txn.id)}
                    style={{ ...getStatusStyle(txn.status), cursor: "pointer" }}
                  >
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer / Pagination */}
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div>
          Remaining Items: <strong>{transactions.length - selectedIds.length}</strong> |
          Selected: <strong>{selectedIds.length}</strong>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <label>Rows</label>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            style={{
              padding: "6px 12px",
              borderRadius: 6,
              border: "1px solid #D1D5DB",
              fontSize: 14,
              minWidth: 80,
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>

        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              minWidth: 80,
              padding: "6px 12px",
              borderRadius: 6,
              background: "#E5E7EB",
              border: "none",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
              opacity: currentPage === 1 ? 0.6 : 1,
            }}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => handlePageChange(num)}
              style={{
                minWidth: 40,
                padding: "6px 12px",
                borderRadius: 6,
                backgroundColor: currentPage === num ? "#3B82F6" : "#F3F4F6",
                color: currentPage === num ? "#fff" : "#111827",
                border: "none",
                cursor: "pointer",
              }}
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{
              minWidth: 80,
              padding: "6px 12px",
              borderRadius: 6,
              background: "#E5E7EB",
              border: "none",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              opacity: currentPage === totalPages ? 0.6 : 1,
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
