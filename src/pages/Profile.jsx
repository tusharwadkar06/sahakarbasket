import React, { useState } from 'react';
import { FaCamera, FaSave, FaTimes, FaUser  } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Profile = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const styles = {
    Topone: {
      width: '100%',
      height: '70px',
      backgroundColor: '#DAEAFF',
    },
    breadcrumbLink: {
      display: 'inline-block',
      backgroundColor: '#f0f0f0',
      color: '#333',
      textDecoration: 'none',
      fontWeight: 'bold',
      borderRadius: '8px',
    },
    outerContainer: {
      width: '100%',
      background: 'linear-gradient(to right, #e0f2ff, #fffce0)',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px',
    },
    profileContainer: {
      margin: '0 auto',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      height: '78vh',
    },
    profileImageSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      paddingBottom: '20px',
      paddingTop: '15px',
      borderBottom: '1px solid #e0e0e0',
    },
    profileCircle: {
      width: '200px',
      height: '200px',
      borderRadius: '120%',
      background: '#007bff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    userIcon: {
      fontSize: '60px',
      color: '#ffffff',
    },
    cameraIconContainer: {
      position: 'absolute',
      bottom: '20px',
      right: '22px',
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
      cursor: 'pointer',
    },
    cameraIcon: {
      fontSize: '14px',
      color: '#444444',
    },
    formSection: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px 30px',
      marginTop: '10px',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    fullWidth: {
      gridColumn: '1/ -1',
    },
    label: {
      fontSize: '14px',
      fontWeight: '600',
      marginBottom: '8px',
      color: '#333333',
      marginLeft: '20px',
      marginRight: '20px',
    },
    input: {
      marginLeft: '20px',
      marginRight: '20px',
      padding: '12px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '15px',
      backgroundColor: '#fff',
      outline: 'none',
    },
    readOnly: {
      backgroundColor: '#f4f4f4',
      cursor: 'not-allowed',
    },
    select: {
      marginLeft: '20px',
      width: '94%',
      padding: '12px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '15px',
      backgroundColor: '#fff',
      outline: 'none',
      cursor: 'pointer',
    },
    buttonSection: {
      display: 'flex',
      marginLeft: '81%',
      marginTop: '30px',
      gap: '15px',
    },
    cancelButton: {
      marginBottom: '10px',
      padding: '12px 24px',
      backgroundColor: '#ffffff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      color: '#888',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
    },
    saveButton: {
      marginBottom: '10px',
      padding: '12px 24px',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '8px',
      color: '#fff',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      marginRight: '8px',
    },
    imagePreview: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };

  return (
    <div className="Top">
      
      <div style={styles.Topone}></div>
      <div style={styles.outerContainer}>
        <div style={styles.profileContainer}>
          {/* Profile Image */}
          <div style={styles.profileImageSection}>
            <div style={styles.profileCircle}>
              {image ? (
                <img src={image} alt="Profile" style={styles.imagePreview} />
              ) : (
                <FaUser  style={styles.userIcon} />
              )}
              <div style={styles.cameraIconContainer}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                  id="fileInput"
                />
                <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
                  <FaCamera style={styles.cameraIcon} />
                </label>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div style={styles.formSection}>
            <div style={{ ...styles.formGroup, ...styles.fullWidth }}>
              <label style={styles.label}>Full Name</label>
              <input type="text" placeholder="Full Name" style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Role</label>
              <select style={styles.select}>
                <option>Super Admin</option>
                <option>Admin</option>
                <option>User</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Last Login Time</label>
              <input type="text" value="19:58" readOnly style={{ ...styles.input, ...styles.readOnly }} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address</label>
              <input type="email" placeholder="example@gmail.com" style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Contact Number</label>
              <input type="text" placeholder="91+ 123456789" style={styles.input} />
            </div>
          </div>

          {/* Buttons */}
          <div style={styles.buttonSection}>
            <button style={styles.cancelButton}>
              <FaTimes style={styles.icon} /> Cancel
            </button>
            <button style={styles.saveButton}>
              <FaSave style={styles.icon} /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;