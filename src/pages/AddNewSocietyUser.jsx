import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';


const AddNewSocietyUser = () => {
  const [formData, setFormData] = useState({
    cluster: '',
    societyBranchName: '',
    userName: '',
    mobileNo: '',
    societyType: '',
    societyAddress: '',
    pinCode: '',
  });


    // Breadcrumb paths
   const breadcrumbPaths = [
    { name: "SocietyUser" },
    { name: "AddNewSocietyUser", highlight: true },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // TODO: Add your API call here
  };

  const handleBack = () => {
    console.log('Back clicked');
  };

  return (
    <>
    <Breadcrumb paths={breadcrumbPaths} />
      <div className="society-form-container">
        <h2 className="form-title">Add New Society User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Select Cluster</label>
              <select
                name="cluster"
                value={formData.cluster}
                onChange={handleChange}
                required
              >
                <option value="">Text</option>
                <option value="Cluster A">Cluster A</option>
                <option value="Cluster B">Cluster B</option>
              </select>
            </div>

            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Text"
                required
              />
            </div>

            <div className="form-group">
              <label>Society Branch Name</label>
              <input
                type="text"
                name="societyBranchName"
                value={formData.societyBranchName}
                onChange={handleChange}
                placeholder="Text"
                required
              />
            </div>

            <div className="form-group">
              <label>Society Type</label>
              <select
                name="societyType"
                value={formData.societyType}
                onChange={handleChange}
                required
              >
                <option value="">Text</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            <div className="form-group">
              <label>Mobile No.</label>
              <input
                type="tel"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                placeholder="Text"
                required
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Society Address</label>
            <input
              type="text"
              name="societyAddress"
              value={formData.societyAddress}
              onChange={handleChange}
              placeholder="Text"
              required
            />
          </div>

          <div className="form-group full-width">
            <label>Pin Code</label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              placeholder="Text"
              required
            />
          </div>

          <div className="form-buttons">
            <button type="button" className="btn-back" onClick={handleBack}>
              Back
            </button>
            <button type="submit" className="btn-submit">
              Submit
              
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .society-form-container {
          background: white;
          padding: 24px;
          border-radius: 8px;
          max-width: 1200px;
          margin-top: 30px;
        }

        .form-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 20px;
          color: #1a1a1a;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        label {
          font-size: 14px;
          font-weight: 500;
          color: #555;
        }

        input,
        select {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 14px;
          background-color: #fff;
        }

        input::placeholder {
          color: #aaa;
        }

        .full-width {
          margin-top: 16px;
        }

        .form-buttons {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }

        .btn-back {
          padding: 10px 20px;
          background-color: #f0f0f0;
          border: none;
          border-radius: 6px;
          color: #555;
          font-weight: 500;
          cursor: pointer;
        }

        .btn-submit {
          padding: 10px 20px;
          background-color: #0d6efd;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
        }

        .btn-submit:hover {
          background-color: #0056d2;
        }
      `}</style>
    </>
  );
};

export default AddNewSocietyUser;
