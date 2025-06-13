

// import React, { useState, useEffect } from 'react';
// import { FaCamera, FaSave, FaTimes, FaUser } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
// import { TextInput } from 'sutra-library';

// const Profile = () => {
//   const [image, setImage] = useState(null);
//   const [loginTime, setLoginTime] = useState('');

//   useEffect(() => {
//     const now = new Date();
//     const formattedTime = now.toLocaleTimeString([], {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: false,
//     });
//     setLoginTime(formattedTime);
//   }, []);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const styles = {
//     Topone: {
//       width: '100%',
//       height: '70px',
//       backgroundColor: '#DAEAFF',
//     },
//     breadcrumbLink: {
      
//       display: 'inline-block',
//       backgroundColor: '#f0f0f0',
//       color: '#333',
//       textDecoration: 'none',
//       fontWeight: 'bold',
//       borderRadius: '8px',
//       marginBottom: '5px',
//       padding: '6px 12px',
//     },
//     outerContainer: {
//       width: '100%',
//       height: '400px',
//       background: 'linear-gradient(to right, #e0f2ff, #fffce0)',
//       borderTopLeftRadius: '12px',
//       borderTopRightRadius: '12px',
//       padding: '2px',
//       overflowX: 'hidden',
//     },
//     profileContainer: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 2fr',
//       gap: '30px',
//       backgroundColor: '#ffffff',
//       borderRadius: '12px',
//       boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
//       padding: '30px',
//     },
//     leftSection: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       borderRight: '1px solid #e0e0e0',
//       paddingRight: '20px',
//     },
//     rightSection: {
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     profileCircle: {
//       width: '180px',
//       height: '180px',
//       borderRadius: '50%',
//       background: '#007bff',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       position: 'relative',
//       overflow: 'hidden',
//     },
//     userIcon: {
//       fontSize: '60px',
//       color: '#ffffff',
//     },
//     cameraIconContainer: {
//       position: 'absolute',
//       bottom: '10px',
//       right: '10px',
//       width: '32px',
//       height: '32px',
//       borderRadius: '50%',
//       backgroundColor: '#ffffff',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
//       cursor: 'pointer',
//       zIndex: '1',
//     },
//     cameraIcon: {
//       fontSize: '15px',
//       color: '#444444',
//       zIndex: '2',
//     },
//     imagePreview: {
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover',
//     },
//     label: {
//       fontSize: '14px',
//       fontWeight: '600',
//       marginBottom: '8px',
//       color: '#333333',
//     },
//     select: {
//       width: '100%',
//       padding: '12px',
//       border: '1px solid #e0e0e0',
//       borderRadius: '8px',
//       fontSize: '15px',
//       backgroundColor: '#fff',
//       outline: 'none',
//       cursor: 'pointer',
//     },
//     formSection: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '20px 30px',
//     },
//     formGroup: {
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     input: {
//       padding: '12px',
//       border: '1px solid #e0e0e0',
//       borderRadius: '8px',
//       fontSize: '15px',
//       backgroundColor: '#fff',
//       outline: 'none',
//       width: '95%',
//     },
//     readOnly: {
//       backgroundColor: '#f4f4f4',
//       cursor: 'not-allowed',
//     },
//     buttonSection: {
//       display: 'flex',
//       justifyContent: 'flex-end',
//       marginTop: '30px',
//       gap: '15px',
//     },
//     cancelButton: {
//       padding: '12px 24px',
//       backgroundColor: '#ffffff',
//       border: '1px solid #ccc',
//       borderRadius: '8px',
//       color: '#888',
//       fontWeight: '600',
//       cursor: 'pointer',
//       display: 'flex',
//       alignItems: 'center',
//     },
//     saveButton: {
//       padding: '12px 24px',
//       backgroundColor: '#007bff',
//       border: 'none',
//       borderRadius: '8px',
//       color: '#fff',
//       fontWeight: '600',
//       cursor: 'pointer',
//       display: 'flex',
//       alignItems: 'center',
//     },
//     icon: {
//       marginRight: '8px',
//     },
//   };

//   return (
//     <div className="Top" style={{ overflowX: 'hidden' }}>
//       <NavLink to="/dashboard" style={styles.breadcrumbLink}>
//         Dashboard &gt; Profile
//       </NavLink>
//       <div style={styles.Topone}></div>
//       <div style={styles.outerContainer}>
//         <div style={styles.profileContainer}>

//           {/* Left Section - Profile Image and Role */}
//           <div style={styles.leftSection}>
//             <div style={styles.profileCircle}>
//               {image ? (
//                 <img src={image} alt="Profile" style={styles.imagePreview} />
//               ) : (
//                 <FaUser style={styles.userIcon} />
//               )}
//               <div style={styles.cameraIconContainer}>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   style={{ display: 'none' }}
//                   id="fileInput"
//                 />
//                 <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
//                   <FaCamera style={styles.cameraIcon} />
//                 </label>
//               </div>
//             </div>
//             <div style={{ marginTop: '20px', width: '100%' }}>
//               <label style={styles.label}>Role</label>
//               <select style={styles.select}>
//                 <option>Super Admin</option>
//                 <option>Admin</option>
//                 <option>User</option>
//               </select>
//             </div>
//           </div>

//           {/* Right Section - Form */}
//           <div style={styles.rightSection}>
//             <div style={styles.formSection}>
//               <div style={styles.formGroup}>
//                 <label style={styles.label}>Full Name</label>
//                 <TextInput
//                   placeholder="Enter your full name"
//                   maxLength={50}
//                   type="text"
//                   isrequired={true}
//                   customStyle={styles.input}
//                   returnValue={(value) => console.log('Full Name:', value)}
//                 />
//               </div>

//               <div style={styles.formGroup}>
//                 <label style={styles.label}>Email Address</label>
//                 <TextInput
//                   type="email"
//                   isrequired={false}
//                   customStyle={styles.input}
//                   returnValue={(value) => console.log('Email:', value)}
//                 />
//               </div>

//               <div style={styles.formGroup}>
//                 <label style={styles.label}>Contact Number</label>
//                 <TextInput
//                   type="text"
//                   isrequired={false}
//                   customStyle={styles.input}
//                   returnValue={(value) => console.log('Contact:', value)}
//                 />
//               </div>

//               <div style={styles.formGroup}>
//                 <label style={styles.label}>Last Login Time</label>
//                 <input
//                   type="text"
//                   value={loginTime}
//                   readOnly
//                   style={{ ...styles.input, ...styles.readOnly }}
//                 />
//               </div>
//             </div>

//             <div style={styles.buttonSection}>
//               <button style={styles.cancelButton}>
//                 <FaTimes style={styles.icon} /> Cancel
//               </button>
//               <button style={styles.saveButton}>
//                 <FaSave style={styles.icon} /> Save
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



import React, { useState, useEffect } from 'react';
import { FaCamera, FaSave, FaTimes, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { TextInput } from 'sutra-library';

const Profile = () => {
  const [image, setImage] = useState(null);
  const [loginTime, setLoginTime] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    setLoginTime(formattedTime);

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      marginBottom: '5px',
      padding: '6px 12px',
    },
    outerContainer: {
      width: '100%',
      background: 'linear-gradient(to right, #e0f2ff, #fffce0)',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px',
      padding: '2px',
      overflowX: 'hidden',
    },
    profileContainer: {
      display: isMobile ? 'flex' : 'grid',
      flexDirection: isMobile ? 'column' : 'initial',
      gridTemplateColumns: isMobile ? 'none' : '1fr 2fr',
      gap: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      padding: isMobile ? '20px' : '30px',
    },
    leftSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRight: isMobile ? 'none' : '1px solid #e0e0e0',
      paddingRight: isMobile ? '0' : '20px',
      marginBottom: isMobile ? '20px' : '0',
    },
    rightSection: {
      display: 'flex',
      flexDirection: 'column',
    },
    profileCircle: {
      width: '180px',
      height: '180px',
      borderRadius: '50%',
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
      bottom: '10px',
      right: '10px',
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
      cursor: 'pointer',
      zIndex: '1',
    },
    cameraIcon: {
      fontSize: '15px',
      color: '#444444',
      zIndex: '2',
    },
    imagePreview: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    label: {
      fontSize: '14px',
      fontWeight: '600',
      marginBottom: '8px',
      color: '#333333',
    },
    select: {
      width: '100%',
      padding: '12px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '15px',
      backgroundColor: '#fff',
      outline: 'none',
      cursor: 'pointer',
    },
    formSection: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '20px 30px',
     
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      padding: '12px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '15px',
      backgroundColor: '#fff',
      outline: 'none',
      width: '90%',
      
    },
    readOnly: {
      backgroundColor: '#f4f4f4',
      cursor: 'not-allowed',
    },
    buttonSection: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'flex-end',
      marginTop: '30px',
      gap: '15px',
    },
    cancelButton: {
      padding: '12px 24px',
      backgroundColor: '#ffffff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      color: '#888',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    saveButton: {
      padding: '12px 24px',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '8px',
      color: '#fff',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      marginRight: '8px',
    },
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="Top" style={{ overflowX: 'hidden' }}>
      <NavLink to="/dashboard" style={styles.breadcrumbLink}>
        Dashboard &gt; Profile
      </NavLink>
      <div style={styles.Topone}></div>
      <div style={styles.outerContainer}>
        <div style={styles.profileContainer}>
          <div style={styles.leftSection}>
            <div style={styles.profileCircle}>
              {image ? (
                <img src={image} alt="Profile" style={styles.imagePreview} />
              ) : (
                <FaUser style={styles.userIcon} />
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
            <div style={{ marginTop: '20px', width: '100%' }}>
              <label style={styles.label}>Role</label>
              <select style={styles.select}>
                <option>Super Admin</option>
                <option>Admin</option>
                <option>User</option>
              </select>
            </div>
          </div>

          <div style={styles.rightSection}>
            <div style={styles.formSection}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name</label>
                <TextInput
                  placeholder="Enter your full name"
                  maxLength={50}
                  type="text"
                  isrequired={true}
                  customStyle={styles.input}
                  returnValue={(value) => console.log('Full Name:', value)}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address</label>
                <TextInput
                  type="email"
                  isrequired={false}
                  customStyle={styles.input}
                  returnValue={(value) => console.log('Email:', value)}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Contact Number</label>
                <TextInput
                  type="text"
                  isrequired={false}
                  customStyle={styles.input}
                  returnValue={(value) => console.log('Contact:', value)}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Last Login Time</label>
                <input
                  type="text"
                  value={loginTime}
                  readOnly
                  style={{ ...styles.input, ...styles.readOnly }}
                />
              </div>
            </div>
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
    </div>
  );
};

export default Profile;

