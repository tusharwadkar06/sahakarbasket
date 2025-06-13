import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import buyerlist from '../assets/images/buyer.png';
import transaction from '../assets/images/transaction.png';
import productstock from '../assets/images/productstock.png';
import addnewproduct from '../assets/images/addnewproduct.png';


const cardData = [
  { title: 'BuyerList', imgSrc: buyerlist },
  { title: 'Transaction', imgSrc: transaction },
  { title: 'Product Stock', imgSrc: productstock },
  { title: 'Add New Product', imgSrc: addnewproduct },
  
];

const MerchantDashboard = () => {
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
        ///  onClick={title === 'Merchant' ? () => navigate('/merchant-list') : undefined}
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

export default MerchantDashboard;

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