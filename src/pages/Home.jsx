import React from 'react';

const homeStyle = {
  padding: '20px',
};

const headingStyle = {
  fontSize: '24px',
  marginBottom: '10px',
};

const paragraphStyle = {
  fontSize: '16px',
  color: '#4b5563',
};

export default function Home() {
  return (
    <div style={homeStyle}>
      <h1 style={headingStyle}>Welcome to Sahkar Basket!</h1>
      <p style={paragraphStyle}>This is the Home page. Use the sidebar to navigate.</p>
    </div>
  );
}
