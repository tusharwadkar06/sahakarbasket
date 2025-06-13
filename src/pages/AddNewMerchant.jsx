import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const initialFormData = {
  businessDetails: {
    businessName: '',
    businessType: '',
    businessCategory: '',
    businessDescription: '',
    gstNumber: '',
    registrationNumber: '',
    panNumber: '',
    image: null,
    imageName: '',
  },
  businessAddress: {
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
  },
  primaryContact: {
    name: '',
    email: '',
    phone: '',
    designation: '',
  },
  bankAccount: {
    accountName: '',
    accountNumber: '',
    ifsc: '',
    bankName: '',
    branch: '',
  },
  loginCredentials: {
    username: '',
    password: '',
    confirmPassword: '',
  },
  serviceProduct: {
    serviceType: '',
    description: '',
  },
  documents: {
    files: [],
  },
};

const tabs = [
  'Business Details',
  'Business Address',
  'Primary Contact Person',
  'Bank Account Details',
  'Login Credentials',
  'Service/Product Info',
  'Document Upload',
];

const AddNewMerchant = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Handle input change for nested fields
  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  // Handle file/image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleChange('businessDetails', 'image', file);
      handleChange('businessDetails', 'imageName', file.name);
    }
  };

  const handleDocumentUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        files: files,
      },
    }));
  };

  // Navigation
  const goToTab = (tab) => setActiveTab(tab);
  const goNext = () => {
    const idx = tabs.indexOf(activeTab);
    if (idx < tabs.length - 1) setActiveTab(tabs[idx + 1]);
  };
  const goBack = () => {
    const idx = tabs.indexOf(activeTab);
    if (idx > 0) setActiveTab(tabs[idx - 1]);
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to your backend here
    console.log(formData);
    alert('Merchant submitted! Check console for data.');
  };

  // Render fields for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Business Details':
        return (
          <>
            <div style={styles.inputGroup}>
              <label>Business Name</label>
              <input
                type="text"
                style={styles.input}
                value={formData.businessDetails.businessName}
                onChange={e => handleChange('businessDetails', 'businessName', e.target.value)}
                placeholder="Text"
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Business Type</label>
              <select
                style={styles.input}
                value={formData.businessDetails.businessType}
                onChange={e => handleChange('businessDetails', 'businessType', e.target.value)}
              >
                <option value="">Text</option>
                <option value="Retail">Retail</option>
                <option value="Wholesale">Wholesale</option>
              </select>
            </div>
            <div style={styles.inputGroup}>
              <label>Business Category</label>
              <select
                style={styles.input}
                value={formData.businessDetails.businessCategory}
                onChange={e => handleChange('businessDetails', 'businessCategory', e.target.value)}
              >
                <option value="">Text</option>
                <option value="Electronics">Electronics</option>
                <option value="Grocery">Grocery</option>
              </select>
            </div>
            <div style={styles.inputGroup}>
              <label>Business Description</label>
              <textarea
                style={styles.textarea}
                value={formData.businessDetails.businessDescription}
                onChange={e => handleChange('businessDetails', 'businessDescription', e.target.value)}
                placeholder="Text"
              />
            </div>
            <div style={styles.inputGroup}>
              <label>GST Number</label>
              <input
                type="text"
                style={styles.input}
                value={formData.businessDetails.gstNumber}
                onChange={e => handleChange('businessDetails', 'gstNumber', e.target.value)}
                placeholder="Text"
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Business Registration Number</label>
              <input
                type="text"
                style={styles.input}
                value={formData.businessDetails.registrationNumber}
                onChange={e => handleChange('businessDetails', 'registrationNumber', e.target.value)}
                placeholder="Text"
              />
            </div>
            <div style={styles.inputGroup}>
              <label>PAN Number</label>
              <input
                type="text"
                style={styles.input}
                value={formData.businessDetails.panNumber}
                onChange={e => handleChange('businessDetails', 'panNumber', e.target.value)}
                placeholder="Text"
              />
            </div>
            <div style={styles.inputGroupFull}>
              <label>Business Store Image</label>
              <label style={styles.imageUploadBox}>
                <FaCloudUploadAlt size={20} />
                <span>Drop your image here, browse Jpeg, png are allowed</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
              </label>
              {formData.businessDetails.imageName && (
                <div style={styles.uploadInfo}>{formData.businessDetails.imageName}</div>
              )}
            </div>
          </>
        );
      case 'Business Address':
        return (
          <>
            <div style={styles.inputGroupFull}>
              <label>Address Line 1</label>
              <input
                type="text"
                style={styles.input}
                value={formData.businessAddress.address1}
                onChange={e => handleChange('businessAddress', 'address1', e.target.value)}
                placeholder="Text"
              />
            </div>
            <div style={styles.inputGroupFull}>
              <label>Address Line 2</label>
              <input
                type="text"
                style={styles.input}
                value={formData.businessAddress.address2}
                onChange={e => handleChange('businessAddress', 'address2', e.target.value)}
                placeholder="Text"
              />
            </div>
            <div style={styles.inputGroup}>
              <label>City</label>
              <input
                type="text"
                style={styles.input}
                value={formData.businessAddress.city}
                onChange={e => handleChange('businessAddress', 'city', e.target.value)}
                placeholder="Text"
              />
            </div>
            <div style={styles.inputGroup}>
              <label>State</label>
              <input
                type="text"
                style={styles.input}
                value={formData.businessAddress.state}
                onChange={e => handleChange('businessAddress', 'state', e.target.value)}
                placeholder="Text"
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Country</label>
              <input
                type="text"
                style={styles.input}
                value={formData.businessAddress.country}
                onChange={e => handleChange('businessAddress', 'country', e.target.value)}
                placeholder="Text"
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Pin code/ZIP Code</label>
              <input
                type="text"
                style={styles.input}
                value={formData.businessAddress.pincode}
                onChange={e => handleChange('businessAddress', 'pincode', e.target.value)}
                placeholder="Text"
              />
            </div>
          </>
        );
      case 'Primary Contact Person':
        return (
          <>
            <div style={styles.inputGroup}>
              <label>Name</label>
              <input
                type="text"
                style={styles.input}
                value={formData.primaryContact.name}
                onChange={e => handleChange('primaryContact', 'name', e.target.value)}
                placeholder="Text"
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Email</label>
              <input
                type="email"
                style={styles.input}
                value={formData.primaryContact.email}
                onChange={e => handleChange('primaryContact', 'email', e.target.value)}
                placeholder="Text"
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Phone</label>
              <input
                type="text"
                style={styles.input}
                value={formData.primaryContact.phone}
                onChange={e => handleChange('primaryContact', 'phone', e.target.value)}
                placeholder="Text"
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Designation</label>
              <input
                type="text"
                style={styles.input}
                value={formData.primaryContact.designation}
                onChange={e => handleChange('primaryContact', 'designation', e.target.value)}
                placeholder="Text"
              />
            </div>
          </>
        );
      case 'Bank Account Details':
  return (
    <>
      <div style={styles.inputGroup}>
        <label>Account Holder Name</label>
        <input
          type="text"
          style={styles.input}
          value={formData.bankAccount.accountName}
          onChange={e => handleChange('bankAccount', 'accountName', e.target.value)}
          placeholder="Text"
        />
      </div>
      <div style={styles.inputGroup}>
        <label>Bank Name</label>
        <input
          type="text"
          style={styles.input}
          value={formData.bankAccount.bankName}
          onChange={e => handleChange('bankAccount', 'bankName', e.target.value)}
          placeholder="Text"
        />
      </div>
      <div style={styles.inputGroup}>
        <label>Account Number</label>
        <input
          type="text"
          style={styles.input}
          value={formData.bankAccount.accountNumber}
          onChange={e => handleChange('bankAccount', 'accountNumber', e.target.value)}
          placeholder="91+"
        />
      </div>
      <div style={styles.inputGroup}>
        <label>IFSC Code</label>
        <input
          type="text"
          style={styles.input}
          value={formData.bankAccount.ifsc}
          onChange={e => handleChange('bankAccount', 'ifsc', e.target.value)}
          placeholder="Text"
        />
      </div>
      <div style={styles.inputGroup}>
        <label>Bank Branch</label>
        <input
          type="text"
          style={styles.input}
          value={formData.bankAccount.branch}
          onChange={e => handleChange('bankAccount', 'branch', e.target.value)}
          placeholder="91+"
        />
      </div>
      <div style={styles.inputGroup}>
        <label>UPI ID</label>
        <input
          type="text"
          style={styles.input}
          value={formData.bankAccount.upiId || ''}
          onChange={e => handleChange('bankAccount', 'upiId', e.target.value)}
          placeholder="91+"
        />
      </div>
      <div style={styles.inputGroupFull}>
        <label>
          Cancelled Cheque Upload <span style={{ fontSize: '12px', color: '#888' }}>(For verification)</span>
        </label>
        <label style={styles.imageUploadBox}>
          <FaCloudUploadAlt size={20} />
          <span>Drop your image here, browse Jpeg, png are allowed</span>
          <input
            type="file"
            accept="image/*"
            onChange={e => handleChange('bankAccount', 'cancelledCheque', e.target.files[0])}
            style={{ display: 'none' }}
          />
        </label>
        {formData.bankAccount.cancelledCheque && (
          <div style={styles.uploadInfo}>{formData.bankAccount.cancelledCheque.name}</div>
        )}
      </div>
    </>
  );
      case 'Login Credentials':
        return (
          <>
            <div style={styles.inputGroup}>
              <label>Username</label>
              <input
                type="text"
                style={styles.input}
                value={formData.loginCredentials.username}
                onChange={e => handleChange('loginCredentials', 'username', e.target.value)}
                placeholder="Text"
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Password</label>
              <input
                type="password"
                style={styles.input}
                value={formData.loginCredentials.password}
                onChange={e => handleChange('loginCredentials', 'password', e.target.value)}
                placeholder="Text"
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Confirm Password</label>
              <input
                type="password"
                style={styles.input}
                value={formData.loginCredentials.confirmPassword}
                onChange={e => handleChange('loginCredentials', 'confirmPassword', e.target.value)}
                placeholder="Text"
              />
            </div>
          </>
        );
     // ...existing code...
    case 'Service/Product Info':
      return (
        <>
          {/* Top Input Fields */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <label style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>
                Type of Products/Services Offered
              </label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  outline: 'none',
                }}
                value={formData.serviceProduct.serviceType}
                onChange={e => handleChange('serviceProduct', 'serviceType', e.target.value)}
                placeholder="Text"
              />
            </div>

            <div style={{ flex: 1, minWidth: '250px' }}>
              <label style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>
                Price Range
              </label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  outline: 'none',
                }}
                value={formData.serviceProduct.priceRange || ''}
                onChange={e => handleChange('serviceProduct', 'priceRange', e.target.value)}
                placeholder="Text"
              />
            </div>
          </div>

          {/* Service Availability Section at the bottom */}
          <div style={{ gridColumn: 'span 2', marginTop: '32px' }}>
            <label style={{ fontWeight: 600, fontSize: '1.1rem', display: 'block', marginBottom: '12px' }}>
              Service Availability
            </label>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {['Delivery', 'Pickup', 'Online'].map(option => (
                <label
                  key={option}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '1rem',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={
                      Array.isArray(formData.serviceProduct.availability)
                        ? formData.serviceProduct.availability.includes(option)
                        : false
                    }
                    onChange={e => {
                      const prev = Array.isArray(formData.serviceProduct.availability)
                        ? formData.serviceProduct.availability
                        : [];
                      if (e.target.checked) {
                        handleChange('serviceProduct', 'availability', [...prev, option]);
                      } else {
                        handleChange('serviceProduct', 'availability', prev.filter(a => a !== option));
                      }
                    }}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </>
      );
// ...existing code...
  
      case 'Document Upload':
        return (
          <>
            <div style={styles.inputGroupFull}>
              <label>Upload Documents</label>
              <input
                type="file"
                style={styles.input}
                multiple
                onChange={handleDocumentUpload}
              />
              {formData.documents.files.length > 0 && (
                <ul>
                  {formData.documents.files.map((file, idx) => (
                    <li key={idx}>{file.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.tabSidebar}>
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => goToTab(tab)}
            style={{
              ...styles.tabItem,
              ...(activeTab === tab ? styles.activeTab : {}),
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      <div style={styles.contentWrapper}>
        <h2 style={styles.title}>Add New Merchant</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          {renderTabContent()}

          <div style={styles.buttonGroup}>
            <button
              type="button"
              style={styles.backButton}
              onClick={goBack}
              disabled={activeTab === tabs[0]}
            >
              Back
            </button>
            {activeTab !== tabs[tabs.length - 1] ? (
              <button
                type="button"
                style={styles.nextButton}
                onClick={goNext}
              >
                Next →
              </button>
            ) : (
              <button type="submit" style={styles.nextButton}>
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    display: 'flex',
    gap: '24px',
    padding: '24px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    maxWidth: '100%',
    margin: '0 auto',
  },
  tabSidebar: {
    width: '220px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    padding: '16px 0',
    display: 'flex',
    flexDirection: 'column',
  },
  tabItem: {
    padding: '12px 20px',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#333',
  },
  activeTab: {
    backgroundColor: '#fff',
    borderLeft: '4px solid #007bff',
    fontWeight: '600',
  },
  contentWrapper: {
    flex: 1,
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '20px',
  },
  form: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroupFull: {
    gridColumn: 'span 2',
    display: 'flex',
    flexDirection: 'column',
    gap: '1px',
  },
  imageUploadBox: {
    border: '2px dashed #ccc',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  uploadInfo: {
    color: 'green',
    fontSize: '14px',
  },
  buttonGroup: {
    gridColumn: 'span 2',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '24px',
  },
  backButton: {
    padding: '10px 20px',
    backgroundColor: '#ccc',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  nextButton: {
    padding: '10px 24px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  input: {
    fontSize: '1.1rem',
    padding: '10px',
    border: '1px solid #888',
    borderRadius: '4px',
    marginTop: '4px',
    marginBottom: '8px',
    width: '100%',
    boxSizing: 'border-box',
  },
  textarea: {
    fontSize: '1.1rem',
    padding: '12px',
    border: '1px solid #888',
    borderRadius: '4px',
    marginTop: '4px',
    marginBottom: '8px',
    width: '100%',
    boxSizing: 'border-box',
    minHeight: '10px',
    resize: 'vertical',
  },
};

export default AddNewMerchant;