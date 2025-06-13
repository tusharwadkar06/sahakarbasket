//merchant view product
import React, { useState } from "react";
import watchImage from "../assets/images/watch.jpg";
import { MdCurrencyRupee } from "react-icons/md";

import {
  AddNewProductButton,
  FilterButton,
  RefreshButton,
  SearchInput,
} from "../components/ActionButtons";
import Breadcrumb from "../components/Breadcrumb";

const ViewProduct = () => {
  const allProducts = [
    {
      id: 1,
      image: watchImage,
      title: "Product 1",
      subtitle: "Category A",
      amount: "120",
      description: "This is a great product.",
      sales: 50,
      remaining: 20,
    },
    {
      id: 2,
      image: watchImage,
      title: "Product 2",
      subtitle: "Category B",
      amount: "95",
      description: "High quality and durable.",
      sales: 30,
      remaining: 40,
    },
    {
      id: 3,
      image: watchImage,
      title: "Product 3",
      subtitle: "Category A",
      amount: "80",
      description: "Excellent design and features.",
      sales: 70,
      remaining: 15,
    },
    {
      id: 4,
      image: watchImage,
      title: "Product 4",
      subtitle: "Category C",
      amount: "150",
      description: "Top-tier performance product.",
      sales: 90,
      remaining: 10,
    },
    {
      id: 5,
      image: watchImage,
      title: "Product 5",
      subtitle: "Category B",
      amount: "110",
      description: "Stylish and modern.",
      sales: 60,
      remaining: 25,
    },
    {
      id: 6,
      image: watchImage,
      title: "Product 6",
      subtitle: "Category A",
      amount: "99",
      description: "Great features at a great price.",
      sales: 40,
      remaining: 35,
    },
    {
      id: 7,
      image: watchImage,
      title: "Product 7",
      subtitle: "Category A",
      amount: "105",
      description: "Premium look and feel.",
      sales: 22,
      remaining: 18,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = allProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <>
      <style>{`
  @media (max-width: 640px) {
    .responsive-header {
      flex-direction: column;
      align-items: flex-start !important;
      gap: 10px !important;
    }

    .responsive-actions {
      flex-wrap: wrap;
      gap: 8px;
      width: 100%;
      justify-content: flex-start;
    }

    .pagination-controls {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }

  .product-card {
    display: flex !important;
    flex-direction: row !important;
    align-items: flex-start !important;
    gap: 10px;
  }

  .product-image {
    width: 80px !important;
    height: 80px !important;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 6px;
  }
`}</style>

      <Breadcrumb
        paths={[
          { name: "Home", link: "/" },
          { name: "ViewProduct", highlight: true },
        ]}
      />

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "16px",
          backgroundColor: "#f9f9f9",
          margin: "17px auto",
          boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
        }}
      >
        <div
          className="responsive-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ margin: 0 }}>All Product</h1>
          <div
            className="responsive-actions"
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <SearchInput />
            <FilterButton />
            <AddNewProductButton />
            <RefreshButton />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "16px",
            padding: "20px",
          }}
        >
          {currentProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "12px",
                backgroundColor: "#fff",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              }}
            >
              <div
                className="product-card"
                style={{
                  display: "flex",
                  gap: "10px",
                  marginBottom: "10px",
                  alignItems: "center",
                }}
              >
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                />
                <div>
                  <h2 style={{ margin: "2px 0", fontSize: "16px" }}>
                    {product.title}
                  </h2>
                  <h4
                    style={{ margin: "2px 0", color: "#777", fontSize: "14px" }}
                  >
                    {product.subtitle}
                  </h4>
                  <p
                    style={{
                      fontWeight: "bold",
                      margin: "2px 0",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "2px",
                    }}
                  >
                    <MdCurrencyRupee />
                    {product.amount}
                  </p>
                  <p style={{ fontSize: "13px", color: "#555" }}>
                    {product.description}
                  </p>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#f1f1f1",
                  borderRadius: "8px",
                  padding: "10px",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    fontSize: "14px",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Sales</span>
                  <span>{product.sales}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Remaining Product:</span>
                  <span>{product.remaining}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div
          className="pagination-controls"
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
            Total Items: <strong>{allProducts.length}</strong> | Showing:{" "}
            <strong>{currentProducts.length}</strong>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
              <option value={2}>2</option>
              <option value={6}>6</option>
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
    </>
  );
};

export default ViewProduct;