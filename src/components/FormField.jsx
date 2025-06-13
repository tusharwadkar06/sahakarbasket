// File: components/FormField.js
import React from 'react';

const FormField = ({ label, icon, placeholder, rightIcon, style }) => {
  return (
    <div style={{ ...styles.col, ...style }}>
      <label style={styles.label}>{label}</label>
      <div style={styles.inputGroup}>
        {icon && <span style={styles.icon}>{icon}</span>}
        <input style={styles.input} placeholder={placeholder} />
        {rightIcon && <span style={styles.iconRight}>{rightIcon}</span>}
      </div>
    </div>
  );
};

export default FormField;

const styles = {
  col: {
    flex: 1,
  },
  label: {
    fontWeight: 600,
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: 6,
    padding: '8px 12px',
    marginTop: 6,
  },
  icon: {
    marginRight: 8,
    color: '#bbb',
  },
  iconRight: {
    marginLeft: 8,
    color: '#bbb',
  },
  input: {
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: 15,
  },
};
