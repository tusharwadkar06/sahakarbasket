






import React from 'react';
import { FiSearch, FiFilter, FiPlus } from 'react-icons/fi';
import watchImage from '../assets/watch.jpg'

const orders = [
  {
    id: 1,
    images: [watchImage],
    extraImages: 2,
    productName: 'Stationary',
    orderId: '#253254',
    date: 'May 2nd,2025',
    customerName: 'Swapnil',
    customerAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    status: 'Delivered',
    amount: '₹ 35,120'
  },
  {
    id: 2,
    images: [watchImage, watchImage],
    extraImages: 15,
    productName: 'Grocery',
    orderId: '#253254',
    date: 'May 2nd,2025',
    customerName: 'Sakshi',
    customerAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    status: 'Cancelled',
    amount: '₹ 2,100'
  },
  {
    id: 3,
    images: [watchImage, watchImage],
    extraImages: 15,
    productName: 'Stationary',
    orderId: '#253254',
    date: 'May 2nd,2025',
    customerName: 'Sakshi',
    customerAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    status: 'Cancelled',
    amount: '₹ 2,100'
  },
  {
    id: 4,
    images: [watchImage],
    extraImages: 2,
    productName: 'Grocery',
    orderId: '#253254',
    date: 'May 2nd,2025',
    customerName: 'Swapnil',
    customerAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    status: 'Delivered',
    amount: '₹ 35,120'
  },
  {
    id: 5,
    images: [watchImage, watchImage],
    extraImages: 15,
    productName: 'Grocery',
    orderId: '#253254',
    date: 'May 2nd,2025',
    customerName: 'Sakshi',
    customerAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    status: 'Cancelled',
    amount: '₹ 2,100'
  }
];

const getStatusStyle = (status) => {
  const base = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  };
  const color = status === 'Delivered' ? 'green' : 'orange';
  return { ...base, color };
};

const thStyle = {
  textAlign: 'left',
  padding: 12,
  fontWeight: '600',
  height: 30,
  whiteSpace: 'nowrap'
};

const tdStyle = {
  padding: 12,
  verticalAlign: 'middle',
  height: 38,
  whiteSpace: 'nowrap'
};

const pageBtnStyle = {
  padding: '6px 12px',
  border: '1px solid #ccc',
  borderRadius: 4,
  background: '#fff',
  cursor: 'pointer'
};

const OrderList = () => {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif', backgroundColor: '#fff' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
        <h2>Order List</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <div style={{ position: 'relative' }}>
            <FiSearch style={{ position: 'absolute', top: '8px', left: '10px', color: '#888' }} />
            <input
              type="text"
              placeholder="Search"
              style={{ padding: '8px 8px 8px 30px', borderRadius: 6, border: '1px solid #ccc', minWidth: 180 }}
            />
          </div>
          <button style={{ border: '1px solid #ccc', padding: '8px 12px', borderRadius: 6, background: '#fff' }}>
            <FiFilter /> Filter
          </button>
          <button style={{ background: '#007bff', color: '#fff', padding: '8px 12px', borderRadius: 6, border: 'none' }}>
            <FiPlus /> Add New
          </button>
        </div>
      </div>

      {/* Table with Horizontal Scroll */}
      <div style={{ overflowX: 'auto', marginTop: 20 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
          <thead style={{ background: '#ddd' }}>
            <tr>
              <th style={thStyle}><input type="checkbox" /></th>
              <th style={thStyle}>Product Image</th>
              <th style={thStyle}>Product Name</th>
              <th style={thStyle}>Order ID</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Customer Name</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={tdStyle}><input type="checkbox" /></td>
                <td style={tdStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    {order.images.map((img, i) => (
                      <img key={i} src={img} alt="" style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 6 }} />
                    ))}
                    <span style={{ fontSize: 12, color: '#007bff' }}>+{order.extraImages}</span>
                  </div>
                </td>
                <td style={tdStyle}>{order.productName}</td>
                <td style={tdStyle}>{order.orderId}</td>
                <td style={tdStyle}>{order.date}</td>
                <td style={tdStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <img src={order.customerAvatar} alt="" style={{ width: 28, height: 28, borderRadius: '50%' }} />
                    {order.customerName}
                  </div>
                </td>
                <td style={tdStyle}>
                  <div style={getStatusStyle(order.status)}>
                    <span style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: order.status === 'Delivered' ? 'green' : 'orange'
                    }}></span>
                    {order.status}
                  </div>
                </td>
                <td style={tdStyle}>{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Pagination */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, flexWrap: 'wrap', gap: 10 }}>
        <select style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 4 }}>
          <option>05</option>
        </select>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <span>Page 1</span>
          <button style={pageBtnStyle}>&lt;&lt; Previous</button>
          <button style={pageBtnStyle}>Next &gt;&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
