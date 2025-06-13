
import React from 'react';
import watchImage from '../assets/watch.jpg';

const ProductStock = () => {
  const products = new Array(8).fill({
    image: watchImage,
    name: 'Wrist Black Watch',
    sku: 'TS001-BL',
    stock: '260',
    status: 'In Stock',
  });

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
          marginBottom: 20,
        }}
      >
        <h2 style={{ margin: 0 }}>Product Stock</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              padding: 8,
              borderRadius: 6,
              border: '1px solid #ccc',
              minWidth: 120,
            }}
          />
          <select
            style={{
              padding: 8,
              borderRadius: 6,
              border: '1px solid #ccc',
              minWidth: 120,
            }}
          >
            <option>Category</option>
          </select>
          <button
            style={{
              background: 'white',
              border: '1px solid #007bff',
              color: '#007bff',
              padding: '8px 12px',
              borderRadius: 6,
            }}
          >
            Total Product - 2000
          </button>
          <button
            style={{
              background: '#007bff',
              color: 'white',
              padding: '8px 12px',
              border: 'none',
              borderRadius: 6,
            }}
          >
            + Add New
          </button>
        </div>
      </div>

      {/* Scrollable Table Wrapper */}
      <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: 900, border: '1px solid #ddd', borderRadius: 8 }}>
          {/* Table Header */}
          <div
            style={{
              display: 'flex',
              backgroundColor: '#f0f7ff',
              padding: 10,
              fontWeight: 'bold',
            }}
          >
            <div style={{ width: '5%' }}>
              <input type="checkbox" />
            </div>
            <div style={{ width: '15%' }}>Product Image</div>
            <div style={{ width: '20%' }}>Product Name</div>
            <div style={{ width: '10%' }}>SKU</div>
            <div style={{ width: '10%' }}>Current Stock</div>
            <div style={{ width: '13%' }}>Status</div>
            <div style={{ width: '10%' }}>Stock Adjust</div>
            <div style={{ width: '17%' }}>Action</div>
          </div>

          {/* Table Rows */}
          {products.map((item, index) => {
            const isOutOfStock = index % 2 === 1;
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  padding: 10,
                  alignItems: 'center',
                  borderTop: '1px solid #eee',
                }}
              >
                <div style={{ width: '5%' }}>
                  <input type="checkbox" />
                </div>
                <div style={{ width: '15%', display: 'flex', alignItems: 'center' }}>
                  <img
                    src={item.image}
                    alt="watch"
                    style={{
                      width: 40,
                      height: 40,
                      marginRight: 6,
                      borderRadius: 4,
                      objectFit: 'cover',
                    }}
                  />
                  <span style={{ color: '#007bff' }}>+2</span>
                </div>
                <div style={{ width: '20%' }}>{item.name}</div>
                <div style={{ width: '10%' }}>{item.sku}</div>
                <div style={{ width: '10%' }}>{isOutOfStock ? '02' : item.stock}</div>
                <div style={{ width: '13%' }}>
                  <span
                    style={{
                      background: isOutOfStock ? '#f8d7da' : '#d4edda',
                      color: isOutOfStock ? '#dc3545' : '#28a745',
                      padding: '4px 8px',
                      borderRadius: 5,
                      fontSize: 12,
                      display: 'inline-block',
                    }}
                  >
                    {isOutOfStock ? 'Out of Stock' : 'In Stock'}
                  </span>
                </div>
                <div style={{ width: '10%', display: 'flex', alignItems: 'center', gap: 5 }}>
                  <button style={{ padding: '4px 8px' }}>+</button>
                  <span>{item.stock}</span>
                  <button style={{ padding: '4px 8px' }}>-</button>
                </div>
                <div style={{ width: '17%', display: 'flex', gap: 6 }}>
                  <button style={{ padding: '4px 8px' }}>✏️</button>
                  <button style={{ padding: '4px 8px' }}>👁️</button>
                  <button
                    style={{
                      padding: '4px 8px',
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      borderRadius: 4,
                    }}
                  >
                    x
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination */}
      <div
        style={{
          marginTop: 16,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <select style={{ padding: 6, borderRadius: 4 }}>
          <option>10</option>
        </select>
        <div>
          Page 1 &nbsp;
          <button style={{ padding: '4px 8px', margin: '0 4px' }}>{'<'}</button>
          <button style={{ padding: '4px 8px' }}>{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductStock;


