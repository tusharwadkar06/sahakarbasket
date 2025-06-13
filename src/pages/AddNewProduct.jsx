import React, { useState } from 'react';
import { FaCloudUploadAlt, FaCheckCircle } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';

const categories = ['', '', ''];
const brands = ['', '', ''];

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: categories[0],
    brand: brands[0],
    sku: '',
    stock: '',
    regularPrice: '',
    salePrice: '',
    tags: ['', '', ''],
  });


  const breadcrumbPaths = [
    { name: "Home" },
    { name: "AddNewProduct", highlight: true },
  ];


  const [images, setImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTagRemove = (tag) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(prev => [...prev, ...files]);
    setUploadProgress(prev => [
      ...prev,
      ...files.map(() => Math.floor(Math.random() * 40) + 60)
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
  };

  return (
    <>
  
      <Breadcrumb paths={breadcrumbPaths} />

      <div className="addprod-main">
        <h2 className="addprod-title">Add New Product</h2>
        <form onSubmit={handleSubmit} className="addprod-form">
          {/* Left Side Inputs */}
          <div className="addprod-form-left">
            {/* Title */}
            <div>
              <label className="addprod-label">Product title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="addprod-input"
                placeholder="Smart Black Watch"
              />
            </div>

            {/* Description */}
            <div>
              <label className="addprod-label">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                className="addprod-input"
                placeholder="Smart Black Watch"
              />
            </div>

            {/* Category + Brand */}
            <div className="addprod-row2">
              <div>
                <label className="addprod-label">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleSelectChange}
                  className="addprod-input"
                >
                  {categories.map(cat => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="addprod-label">Brand Name</label>
                <select
                  name="brand"
                  value={formData.brand}
                  onChange={handleSelectChange}
                  className="addprod-input"
                >
                  {brands.map(brand => (
                    <option key={brand}>{brand}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* SKU + Stock */}
            <div className="addprod-row2">
              <div>
                <label className="addprod-label">SKU</label>
                <input
                  name="sku"
                  value={formData.sku}
                  onChange={handleInputChange}
                  className="addprod-input"
                  placeholder="#32A53"
                />
              </div>
              <div>
                <label className="addprod-label">Stock Quantity</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  className="addprod-input"
                  placeholder="99"
                />
              </div>
            </div>

            {/* Price Fields */}
            <div className="addprod-row2">
              <div>
                <label className="addprod-label">Regular Price</label>
                <input
                  type="number"
                  name="regularPrice"
                  value={formData.regularPrice}
                  onChange={handleInputChange}
                  className="addprod-input"
                  placeholder="₹4999"
                />
              </div>
              <div>
                <label className="addprod-label">
                  Sale Price <span className="addprod-label-hint">(if different)</span>
                </label>
                <input
                  type="number"
                  name="salePrice"
                  value={formData.salePrice}
                  onChange={handleInputChange}
                  className="addprod-input"
                  placeholder="₹8999"
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="addprod-label">Tags</label>
              <div className="addprod-tags">
                {formData.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="addprod-tag"
                  >
                    {tag}
                    <button
                      type="button"
                      className="addprod-tag-remove"
                      onClick={() => handleTagRemove(tag)}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            
          </div>

          {/* Right Side Image Upload */}
          <div className="addprod-form-right">
            {/* Image Preview */}
            <div className="addprod-img-preview">
              {images[0] ? (
                <img
                  src={URL.createObjectURL(images[0])}
                  alt="Preview"
                  className="addprod-img"
                />
              ) : (
                <span className="addprod-img-placeholder">No Preview</span>
              )}
            </div>

            {/* Upload Area */}
            <label className="addprod-label" style={{marginBottom: 8}}>Add Images</label>
            <div className="addprod-upload-area">
              <label className="addprod-upload-label">
                <FaCloudUploadAlt size={24} />
                <span className="addprod-upload-text">
                  Drop your image here, or browse<br />
                  <span className="addprod-upload-hint">Jpeg, png are allowed</span>
                </span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="addprod-upload-input"
                  onChange={handleImageUpload}
                />
                <span className="addprod-upload-btn">
                  Upload
                </span>
              </label>
            </div>

            {/* Uploaded Images List */}
            <div className="addprod-uploaded-list">
              {images.map((file, i) => (
                <div
                  key={i}
                  className="addprod-uploaded-item"
                >
                  <div className="addprod-uploaded-thumb">
                    <img
                      src={URL.createObjectURL(file)}
                      className="addprod-uploaded-img"
                      alt="thumb"
                    />
                    <span className="addprod-uploaded-name">Product thumbnail.png</span>
                  </div>
                  <div className="addprod-uploaded-status">
                    <div className="addprod-uploaded-bar-bg">
                      <div
                        className="addprod-uploaded-bar"
                        style={{ width: `${uploadProgress[i] || 100}%` }}
                      />
                    </div>
                    <FaCheckCircle className="addprod-uploaded-check" />
                  </div>
                  
                </div>
                
              ))}
            </div>

            
            {/* Buttons */}
            <div className="addprod-btn-row">
              <button
                type="submit"
                className="addprod-btn-primary"
              >
                SUBMIT
              </button>
              <button
                type="button"
                className="addprod-btn-secondary"
              >
                CANCEL
              </button>
            </div>
          </div>
        </form>
      </div>
      <style>{`
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .addprod-breadcrumb {
          margin-bottom: 10px;
          font-size: 14px;
          color: #888;
        }
        .addprod-breadcrumb-current {
          color: #222;
          font-weight: 500;
        }
        .addprod-main {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 2px 8px 0 rgba(0,0,0,0.07);
          border: 1px solid #e5e7eb;
          padding: 0px 32px 0px 32px; /* reduced vertical padding */
          max-width: 1300px;
          margin: 8px auto 0 auto;
          width: 100%;
          height: 95%;
          box-sizing: border-box;
        }
        .addprod-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 8px; /* add a little space below title */
          margin-top: 0;
        }
        .addprod-form {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }
        @media (max-width: 900px) {
          .addprod-form {
            grid-template-columns: 1fr;
          }
          .addprod-main {
            padding: 18px 4vw;
          }
        }
        .addprod-form-left {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .addprod-label {
          font-weight: 600;
          margin-bottom: 5px;
          display: block;
        }
        .addprod-label-hint {
          font-size: 12px;
          color: #888;
          font-weight: 400;
        }
        .addprod-input {
          width: 90%;
          border: 1px solid #d1d5db;
          border-radius: 7px;
          padding: 10px 12px;
          font-size: 15px;
          background: #fff;
          outline: none;
          transition: border 0.2s;
        }
        .addprod-input:focus {
          border: 1.5px solid #2997ff;
          box-shadow: 0 0 0 2px #2997ff22;
        }
        .addprod-row2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }
        .addprod-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          background: #fff;
          border: 1px solid #d1d5db;
          border-radius: 7px;
          padding: 7px 8px;
        }
        .addprod-tag {
          background: #222;
          color: #fff;
          padding: 3px 10px;
          border-radius: 5px;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .addprod-tag-remove {
          background: none;
          border: none;
          color: #fff;
          font-size: 13px;
          margin-left: 3px;
          cursor: pointer;
          transition: color 0.2s;
        }
        .addprod-tag-remove:hover {
          color: #ff4d4f;
        }
        .addprod-btn-row {
          display: flex;
          gap: 15px;
          margin-top: 22px;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .addprod-btn-primary {
          background: #2563eb;
          color: #fff;
          padding: 10px 38px;
          border-radius: 7px;
          font-weight: 600;
          border: none;
          font-size: 15px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .addprod-btn-primary:hover {
          background: #1749b1;
        }
        .addprod-btn-secondary {
          background: #fff;
          color: #444;
          padding: 10px 38px;
          border-radius: 7px;
          font-weight: 600;
          border: 1px solid #bbb;
          font-size: 15px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .addprod-btn-secondary:hover {
          background: #f3f4f6;
        }
        .addprod-form-right {
          display: flex;
          flex-direction: column;
        }
        .addprod-img-preview {
          border: 1px solid #d1d5db;
          border-radius: 10px;
          height: 220px;
          margin-bottom: 18px;
          background: #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .addprod-img {
          object-fit: contain;
          height: 100%;
          width: auto;
          max-width: 100%;
        }
        .addprod-img-placeholder {
          color: #bbb;
          font-size: 15px;
        }
        .addprod-upload-area {
          border: 2px dashed #d1d5db;
          border-radius: 8px;
          height: 15%;
          padding: 8px 8px;
          margin-bottom: 12px;
          text-align: center;
          background: #fff;
        }
        .addprod-upload-label {
          cursor: pointer;
          font-size: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1px;
          height: 90%;
        }
        .addprod-upload-input {
          display: none;
        }
        .addprod-upload-text {
          color: #666;
          font-size: 14px;
        }
        .addprod-upload-hint {
          color: #bbb;
          font-size: 12px;
        }
        .addprod-upload-btn {
          margin-top: 7px;
          padding: 4px 18px;
          background: #e0edff;
          color: #2563eb;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid #b6d6ff;
          display: inline-block;
        }
        .addprod-uploaded-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .addprod-uploaded-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 7px 12px;
          border: 1px solid #d1d5db;
          border-radius: 7px;
          background: #fff;
        }
        .addprod-uploaded-thumb {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .addprod-uploaded-img {
          width: 32px;
          height: 32px;
          object-fit: cover;
          border-radius: 5px;
        }
        .addprod-uploaded-name {
          font-size: 14px;
          color: #444;
        }
        .addprod-uploaded-status {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 100px;
        }
        .addprod-uploaded-bar-bg {
          width: 90px;
          height: 7px;
          background: #e5e7eb;
          border-radius: 4px;
          overflow: hidden;
        }
        .addprod-uploaded-bar {
          height: 100%;
          background: #2997ff;
          border-radius: 4px;
          transition: width 0.3s;
        }
        .addprod-uploaded-check {
          color: #22c55e;
          font-size: 18px;
        }
      `}</style>
    </>
  );
};

export default AddProductPage;