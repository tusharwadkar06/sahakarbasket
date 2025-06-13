import React, { useState } from 'react';
import TimelineTabs from '../components/TimelineTabs';
import Breadcrumb from '../components/Breadcrumb';


const MerchantInfo = () => {
  const [activeTab, setActiveTab] = useState('merchant');

  const breadcrumbPaths = [
    { name: "Home",link:"/" },
    { name: "Merchant List",link:"/merchant-list" },
    { name: "Merchant Info" } 
  ];

  const exportToCSV = () => {
    const headers = [
      'Full Name',
      'Merchant Name',
      'Category',
      'Contact',
      'Address',
      'Account Holder Name',
      'Bank Account Number',
      'Account Type',
      'Bank Name',
      'Branch Name or Branch Code',
      'IFSC Code',
      'SWIFT/BIC Code',
      'Routing Number'
    ];


    const csvRows = [headers, Array(headers.length).fill('')]; 
    const csvContent = csvRows.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "merchant_info.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Breadcrumb paths={breadcrumbPaths} />
      <TimelineTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'merchant' && (
        <div style={styles.card}>
          <div style={styles.headerRow}>
            <h2 style={styles.heading}>Merchant Info</h2>
            <div style={styles.actionBtns}>
              <button style={styles.activeBtn}>● Active</button>
              <button style={styles.inactiveBtn}>● Inactive</button>
              <button style={styles.exportBtn} onClick={exportToCSV}>⭳ Export</button>
            </div>
          </div>

          <form>
            <div style={styles.row}>
              <div style={styles.col}>
                <label style={styles.label}>Full Name</label>
                <div style={styles.inputGroup}>
                  
                  <input style={styles.input} placeholder="Full Name" />
                </div>
              </div>
              <div style={styles.col}>
                <label style={styles.label}>Merchant Name</label>
                <div style={styles.inputGroup}>
                  
                  <input style={styles.input} placeholder="Merchant Name" />
                </div>
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.col}>
                <label style={styles.label}>Category</label>
                <div style={styles.inputGroup}>
                 
                  <input style={styles.input} placeholder="Goods" />
                </div>
              </div>
              <div style={styles.col}>
                <label style={styles.label}>Contact</label>
                <div style={styles.inputGroup}>
                 
                  <input style={styles.input} placeholder="91+ 1234567891" />
                </div>
              </div>
            </div>

            <div style={styles.singleRow}>
              <label style={styles.label}>Address</label>
              <div style={styles.inputGroup}>
               
                <input style={styles.input} placeholder="Address" />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.col}>
                <label style={styles.label}>Account Holder Name</label>
                <div style={styles.inputGroup}>
                  
                  <input style={styles.input} placeholder="Account Holder Name" />
                </div>
              </div>
              <div style={styles.col}>
                <label style={styles.label}>Bank Account Number</label>
                <div style={styles.inputGroup}>
                  
                  <input style={styles.input} placeholder="Account Number" />
                </div>
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.col}>
                <label style={styles.label}>Account Type</label>
                <div style={styles.inputGroup}>
                 
                  <input style={styles.input} placeholder="Saving" />
                  <span style={styles.iconRight}>▼</span>
                </div>
              </div>
              <div style={styles.col}>
                <label style={styles.label}>Bank Name</label>
                <div style={styles.inputGroup}>
                  
                  <input style={styles.input} placeholder="ICICI" />
                </div>
              </div>
              <div style={styles.col}>
                <label style={styles.label}>Branch Name or Branch Code</label>
                <div style={styles.inputGroup}>
                  
                  <input style={styles.input} placeholder="ICICI" />
                </div>
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.col}>
                <label style={styles.label}>IFSC Code</label>
                <div style={styles.inputGroup}>
                 
                  <input style={styles.input} placeholder="IFSC" />
                  <span style={styles.iconRight}>▼</span>
                </div>
              </div>
              <div style={styles.col}>
                <label style={styles.label}>SWIFT/BIC Code</label>
                <div style={styles.inputGroup}>
                  
                  <input style={styles.input} placeholder="SWIFT" />
                </div>
              </div>
              <div style={styles.col}>
                <label style={styles.label}>Routing Number</label>
                <div style={styles.inputGroup}>
                 
                  <input style={styles.input} placeholder="Routing Number" />
                </div>
              </div>
            </div>

            <div style={styles.footerRow}>
              <button style={styles.backBtn}>← Back</button>
              <div>
                <button style={styles.saveBtn}>Save</button>
                <button style={styles.nextBtn}>Next →</button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MerchantInfo;

const styles = {
  card: {
    maxWidth: "100%",
    width: "100%",
    height: "567px",
    margin: "0",
    background: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    padding: "10px 10px",
    boxShadow: "2px 2px rgba(0,0,0,0.03)",
    boxSizing: "border-box",
    overflow : "none",
  },
  breadcrumb: {
    color: "#888",
    fontSize: 14,
    marginBottom: 8,
    marginLeft: 8,
    marginTop: 0,
  },
  breadcrumbActive: {
    color: "#2979ff",
    fontWeight: 500
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
  },
  heading: {
    margin: 0,
    fontWeight: 700,
    fontSize: 20
  },
  actionBtns: {
    display: "flex",
    gap: 12
  },
  activeBtn: {
    background: "#eafbe7",
    color: "#22c55e",
    border: "none",
    borderRadius: 6,
    padding: "6px 18px",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    gap: 6
  },
  inactiveBtn: {
    background: "#fbe7e7",
    color: "#f87171",
    border: "none",
    borderRadius: 6,
    padding: "6px 18px",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    gap: 6
  },
  exportBtn: {
    background: "#f5f5f5",
    color: "#222",
    border: "1px solid #ddd",
    borderRadius: 6,
    padding: "6px 18px",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    gap: 6,
    cursor: "pointer"
  },
  row: {
    display: "flex",
    gap: 14,
    marginBottom: 10
  },
  singleRow: {
    marginBottom: 16
  },
  col: {
    flex: 1
  },
  label: {
    fontWeight: 600
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: 6,
    padding: "8px 12px",
    marginTop: 6
  },
  icon: {
    marginRight: 8,
    color: "#bbb"
  },
  iconRight: {
    marginLeft: 8,
    color: "#bbb"
  },
  input: {
    border: "none",
    outline: "none",
    width: "100%",
    fontSize: 15
  },
  footerRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10
  },
  backBtn: {
    background: "#fff",
    color: "#222",
    border: "1px solid #ddd",
    borderRadius: 6,
    padding: "10px 32px",
    fontWeight: 500,
    fontSize: 16,
    display: "flex",
    alignItems: "center",
    gap: 6
  },
  saveBtn: {
    background: "#2979ff",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "10px 32px",
    fontWeight: 500,
    fontSize: 16,
    marginRight: 12
  },
  nextBtn: {
    background: "#f5f5f5",
    color: "#bbb",
    border: "1px solid #ddd",
    borderRadius: 6,
    padding: "10px 32px",
    fontWeight: 500,
    fontSize: 16
  }
};
