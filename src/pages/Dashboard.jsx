import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import branch from '../assets/images/branch.png'; 
import buyer from '../assets/images/buyer.png';  
import discount from '../assets/images/discount.png'; 
import report from '../assets/images/report.png'; 
import user from '../assets/images/user.png'; 
import merchant from '../assets/images/merchant.png';

const cardData = [
  { title: 'Merchant', imgSrc: merchant },
  { title: 'Buyer', imgSrc: buyer },
  { title: 'Discount', imgSrc: discount },
  { title: 'Report & Analytics', imgSrc: report },
  { title: 'Branch', imgSrc: branch },
  { title: 'User & Role Management', imgSrc: user },
];

const MainContent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      {cardData.map(({ title, imgSrc }, idx) => (
        <div
          key={title}
          style={{
            ...styles.card,
            boxShadow:
              hoveredIndex === idx
                ? '0 0 0 3px #2997ff33, 0 2px 8px 0 rgba(41,151,255,0.15)'
                : styles.card.boxShadow,
            border:
              hoveredIndex === idx
                ? '1.5px solid #2997ff'
                : 'none',
            transition: 'box-shadow 0.25s, border 0.25s'
          }}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={title === 'Merchant' ? () => navigate('/merchant-list') : undefined}
        >
          <img
            src={imgSrc}
            alt={title}
            style={{
              ...styles.cardImg,
              transform: hoveredIndex === idx ? 'scale(1.12)' : 'scale(1)',
              transition: 'transform 0.25s'
            }}
          />
          <div style={styles.cardTitle}>{title}</div>
        </div>
      ))}
    </div>
  );
};

export default MainContent;

// --- Styles ---
const styles = {
  wrapper: {
    padding: 0,
    flex: 1,
    backgroundColor: '#f9fafb',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20
  },
  card: {
    flex: '1 1 calc(33.333% - 20px)',
    background: 'white',
    borderRadius: 10,
    boxShadow: '0 0 8px rgb(0 0 0 / 0.1)',
    padding: 20,
    textAlign: 'center',
    cursor: 'pointer',
    minWidth: 260,
    
    
  },
  cardImg: {
    maxWidth: '21.50%',
    marginBottom: 11
  },
  cardTitle: {
    fontWeight: 600,
    fontSize: 18
  }
};