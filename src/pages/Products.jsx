import React, { useState, useEffect } from 'react';
import TimelineTabs from '../components/TimelineTabs';
import { useNavigate } from "react-router-dom";
import Breadcrumb from '../components/Breadcrumb';

import product1 from '../assets/images/product1.png';
import product2 from '../assets/images/product2.png';
import product3 from '../assets/images/product3.png';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);  
  const [selectedCategories, setSelectedCategories] = useState([]);


  // Breadcrumb paths
  const breadcrumbPaths = [
    { name: "Home" },
    { name: "Merchant List" },
    { name: "Merchant Info" },
    { name: "Products", highlight: true }
  ];
  
  const navigate = useNavigate();

  const categories = [
    'Health & Medicine', 'Book & Stationary', 'Services & Industry',
    'Fashion & Beauty', 'Home & Living', 'Electronics',
    'Mobile & Phone', 'Accessories'
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      const data = [
        { id: 1, name: 'Travel Shirt Blue', price: '₹385.00', img: product1 },
        { id: 2, name: 'Titan Watch Black', price: '₹2385.00', img: product2 },
        { id: 3, name: 'Madhur Pure Sugar (1kg)', price: '₹2385.00', img: product3 },
        { id: 1, name: 'Travel Shirt Blue', price: '₹385.00', img: product1 },
        { id: 2, name: 'Titan Watch Black', price: '₹2385.00', img: product2 },
        { id: 3, name: 'Madhur Pure Sugar (1kg)', price: '₹2385.00', img: product3 },
        { id: 1, name: 'Travel Shirt Blue', price: '₹385.00', img: product1 },
        { id: 2, name: 'Titan Watch Black', price: '₹2385.00', img: product2 },
        { id: 3, name: 'Madhur Pure Sugar (1kg)', price: '₹2385.00', img: product3 },
        { id: 1, name: 'Travel Shirt Blue', price: '₹385.00', img: product1 },
        { id: 2, name: 'Titan Watch Black', price: '₹2385.00', img: product2 },
        { id: 3, name: 'Madhur Pure Sugar (1kg)', price: '₹2385.00', img: product3 },
      ];
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleEdit = (id) => {
    console.log('Edit', id);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    console.log("Delete confirmed for ID:", deleteId);
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat)
        ? prev.filter(c => c !== cat)
        : [...prev, cat]
    );
  };

  const styles = {
    container: {
      fontFamily: 'sans-serif',
      height: '100%',
      overflow: 'hidden',
      boxSizing: 'border-box',
    },
    breadcrumb: { fontSize: '14px', color: '#555', marginBottom: "4px", marginTop: "0px", marginLeft: "7px" },
    tabs: { display: 'flex', gap: '10px', marginBottom: '20px' },
    tab: (active) => ({
      padding: '8px 16px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      backgroundColor: active ? '#e6eeff' : '#fff',
      color: active ? '#0b57d0' : '#333',
      fontWeight: active ? 'bold' : 'normal',
      cursor: 'pointer',
    }),
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1px', position: "relative" },
    actions: { display: 'flex', gap: '10px', alignItems: 'center' },
    input: { padding: '8px', borderRadius: '4px', border: '1px solid #ccc' },
    select: { padding: '8px', borderRadius: '4px', border: '1px solid #ccc', cursor: 'pointer' },
    stock: { backgroundColor: '#f0f0f0', padding: '6px 10px', borderRadius: '4px' },
    addBtn: { padding: '8px 12px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: '16px',
      maxHeight: '87%',
      overflowY: 'auto',
      height: '100%'
    },
    card: { border: '1px solid #ddd', padding: '10px', borderRadius: '8px', textAlign: 'center' },
    img: { width: '100px', height: '100px', objectFit: 'cover' },
    btnRow: { display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '10px' },
    btnEdit: { padding: '4px 8px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' },
    btnDelete: { padding: '4px 8px', border: '1px solid red', color: 'red', borderRadius: '4px', cursor: 'pointer' },
  };

  return (
    <div style={styles.container}>
      <Breadcrumb paths={breadcrumbPaths} />

      <TimelineTabs />

      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '10px',
          paddingBottom: '2px',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          border: '1px solid #eee',
          height: "82%",
          overflow: "auto"
        }}
      >

        <div style={styles.header}>
          <h2>Products</h2>
          <div style={styles.actions}>
            <input type="text" placeholder="Search" style={styles.input} />
            <select onClick={() => setShowCategoryPopup(true)} style={styles.select}>
              <option>Category</option>
            </select>
            <div style={styles.stock}>Total Stock - {products.length}</div>
            <button style={styles.addBtn} onClick={() => navigate('/add-product')}>+ Add New</button>
          </div>
        </div>

        <div style={styles.grid}>
          {products.map((product, index) => (
            <div key={index} style={styles.card}>
              <img src={product.img} alt={product.name} style={styles.img} />
              <p>{product.name}</p>
              <h3>{product.price}</h3>
              <div style={styles.btnRow}>
                <button style={styles.btnEdit} onClick={() => handleEdit(product.id)}>
                  Edit
                </button>
                <button style={styles.btnDelete} onClick={() => handleDeleteClick(product.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
          justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#fff', padding: '20px', borderRadius: '16px',
            width: '360px', textAlign: 'center'
          }}>
            <div style={{ fontSize: '36px', marginBottom: '10px' }}>🗑️</div>
            <h3 style={{ marginBottom: '10px' }}>Delete</h3>
            <p style={{ color: '#555' }}>Are you sure you want to delete?</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <button onClick={() => setShowDeleteModal(false)} style={{
                padding: '10px 20px', borderRadius: '8px', border: 'none',
                backgroundColor: '#e0e0e0', color: '#333'
              }}>Cancel</button>
              <button onClick={confirmDelete} style={{
                padding: '10px 20px', borderRadius: '8px', border: 'none',
                backgroundColor: '#e53935', color: '#fff'
              }}>Confirm</button>
            </div>
          </div>
        </div>
      )}

      {/* Category Popup */}
      {showCategoryPopup && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
          justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#fff', padding: '20px', borderRadius: '16px',
            width: '420px'
          }}>
            <h3>Select Category</h3>
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px'
            }}>
              {categories.map(cat => (
                <button key={cat}
                  onClick={() => toggleCategory(cat)}
                  style={{
                    padding: '8px 14px', borderRadius: '20px',
                    border: selectedCategories.includes(cat) ? '2px solid #2962ff' : '1px solid #ccc',
                    backgroundColor: selectedCategories.includes(cat) ? '#2962ff' : '#fff',
                    color: selectedCategories.includes(cat) ? '#fff' : '#333',
                    cursor: 'pointer'
                  }}>
                  {cat}
                </button>
              ))}
            </div>
            <p style={{ fontSize: '12px', marginTop: '10px', color: '#555' }}>
              *You can choose multiple category type
            </p>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button onClick={() => setShowCategoryPopup(false)} style={{
                padding: '10px 40px', backgroundColor: '#2962ff',
                color: '#fff', borderRadius: '10px', border: 'none'
              }}>Apply</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;