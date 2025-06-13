import React from 'react';

function TimelineTabs({ activeTab, onTabChange }) {
  const tabs = [
    { label: 'Merchant Info', key: 'merchant', icon: '🏪' },
    { label: 'Product', key: 'products', icon: '🛍️' },
    { label: 'Transaction', key: 'transaction', icon: '💳' },
  ];

  return (
    <div style={styles.timelineContainer}>
      <div style={styles.tabsWrapper}>
        {tabs.map((tab) => (
          <div
            key={tab.key}
            style={{
              ...styles.tab,
              ...(activeTab === tab.key ? styles.tabActive : {}),
            }}
            onClick={() => onTabChange(tab.key)}
          >
            <span style={styles.icon}>{tab.icon}</span>
            {tab.label}
          </div>
        ))}
      </div>
      <div style={styles.timelineLine}></div>
    </div>
  );
}

export default TimelineTabs;

const styles = {
  timelineContainer: {
    position: 'relative',
    margin: '10px',
  },
  tabsWrapper: {
    display: 'flex',
    gap: '197px',
    margin: '25px',
    marginTop: '2px',
    marginBottom: '5px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  },
  timelineLine: {
    position: 'absolute',
    top: '50%',
    left: '5%',
    right: '5%',
    height: '2px',
    backgroundColor: '#ccc',
    zIndex: 0,
  },
  tab: {
    backgroundColor: '#fff',
    width: '20%',
    height: '1%',
    padding: '10px 20px',
    border: '2px solid transparent',
    borderRadius: '8px',
    fontWeight: 500,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '1px',
    transition: '0.3s',
  },
  tabActive: {
    border: '2px solid #2979ff',
    color: '#2979ff',
    backgroundColor: '#fff',
  },
  icon: {
    fontSize: '18px',
    color: '#000',
    marginRight: '5px',
  },
};
