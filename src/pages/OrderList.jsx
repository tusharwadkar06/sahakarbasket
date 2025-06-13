

// // import React, { useState } from 'react';
// // import { FiSearch, FiFilter, FiPlus } from 'react-icons/fi';
// // import watchImage from '../assets/watch.jpg'; 
// // const orders = [
// //   {
// //     id: 1,
// //     images: [watchImage],
// //     extraImages: 2,
// //     productName: 'Stationary',
// //     orderId: '#253254',
// //     date: 'May 2nd,2025',
// //     customerName: 'Swapnil',
// //     customerAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
// //     status: 'Delivered',
// //     amount: '₹ 35,120'
// //   },
// //   {
// //     id: 2,
// //     images: [watchImage, watchImage],
// //     extraImages: 15,
// //     productName: 'Grocery',
// //     orderId: '#253254',
// //     date: 'May 2nd,2025',
// //     customerName: 'Sakshi',
// //     customerAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
// //     status: 'Cancelled',
// //     amount: '₹ 2,100'
// //   },
// //   {
// //     id: 3,
// //     images: [watchImage, watchImage],
// //     extraImages: 15,
// //     productName: 'Stationary',
// //     orderId: '#253254',
// //     date: 'May 2nd,2025',
// //     customerName: 'Sakshi',
// //     customerAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
// //     status: 'Cancelled',
// //     amount: '₹ 2,100'
// //   },
// //   {
// //     id: 4,
// //     images: [watchImage],
// //     extraImages: 2,
// //     productName: 'Grocery',
// //     orderId: '#253254',
// //     date: 'May 2nd,2025',
// //     customerName: 'Swapnil',
// //     customerAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
// //     status: 'Delivered',
// //     amount: '₹ 35,120'
// //   },
// //   {
// //     id: 5,
// //     images: [watchImage, watchImage],
// //     extraImages: 15,
// //     productName: 'Grocery',
// //     orderId: '#253254',
// //     date: 'May 2nd,2025',
// //     customerName: 'Sakshi',
// //     customerAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
// //     status: 'Cancelled',
// //     amount: '₹ 2,100'
// //   }
// // ];

// // const getStatusStyle = (status) => {
// //   const base = {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '6px'
// //   };
// //   const color = status === 'Delivered' ? 'green' : 'orange';
// //   return { ...base, color };
// // };

// // const thStyle = {
// //   textAlign: 'left',
// //   padding: 12,
// //   fontWeight: '600',
// //   height: 30,
// //   whiteSpace: 'nowrap'
// // };

// // const tdStyle = {
// //   padding: 12,
// //   verticalAlign: 'middle',
// //   height: 38,
// //   whiteSpace: 'nowrap'
// // };

// // const pageBtnStyle = {
// //   padding: '6px 12px',
// //   border: '1px solid #ccc',
// //   borderRadius: 4,
// //   background: '#fff',
// //   cursor: 'pointer'
// // };

// // const OrderList = () => {
// //   const [selectedOrders, setSelectedOrders] = useState([]);

// //   const handleSelectAll = (e) => {
// //     if (e.target.checked) {
// //       setSelectedOrders(orders.map(order => order.id));
// //     } else {
// //       setSelectedOrders([]);
// //     }
// //   };

// //   const handleSelectOne = (id) => {
// //     setSelectedOrders(prev =>
// //       prev.includes(id)
// //         ? prev.filter(i => i !== id)
// //         : [...prev, id]
// //     );
// //   };

// //   const isAllSelected = selectedOrders.length === orders.length;

// //   return (
// //     <div style={{ padding: 20, fontFamily: 'sans-serif', backgroundColor: '#fff' }}>
// //       {/* Header */}
// //       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
// //         <h2>Order List</h2>
// //         <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
// //           <div style={{ position: 'relative' }}>
// //             <FiSearch style={{ position: 'absolute', top: '8px', left: '10px', color: '#888' }} />
// //             <input
// //               type="text"
// //               placeholder="Search"
// //               style={{ padding: '8px 8px 8px 30px', borderRadius: 6, border: '1px solid #ccc', minWidth: 180 }}
// //             />
// //           </div>
// //           <button style={{ border: '1px solid #ccc', padding: '8px 12px', borderRadius: 6, background: '#fff' }}>
// //             <FiFilter /> Filter
// //           </button>
// //           <button style={{ background: '#007bff', color: '#fff', padding: '8px 12px', borderRadius: 6, border: 'none' }}>
// //             <FiPlus /> Add New
// //           </button>
// //         </div>
// //       </div>

// //       {/* Table */}
// //       <div style={{ overflowX: 'auto', }}>
// //         <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
// //           <thead style={{ background: '#ddd' }}>
// //             <tr>
// //               <th style={thStyle}>
// //                 <input
// //                   type="checkbox"
// //                   checked={isAllSelected}
// //                   onChange={handleSelectAll}
// //                 />
// //               </th>
// //               <th style={thStyle}>Product Image</th>
// //               <th style={thStyle}>Product Name</th>
// //               <th style={thStyle}>Order ID</th>
// //               <th style={thStyle}>Date</th>
// //               <th style={thStyle}>Customer Name</th>
// //               <th style={thStyle}>Status</th>
// //               <th style={thStyle}>Amount</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {orders.map(order => (
// //               <tr key={order.id} style={{ borderBottom: '1px solid #eee' }}>
// //                 <td style={tdStyle}>
// //                   <input
// //                     type="checkbox"
// //                     checked={selectedOrders.includes(order.id)}
// //                     onChange={() => handleSelectOne(order.id)}
// //                   />
// //                 </td>
// //                 <td style={tdStyle}>
// //                   <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
// //                     {order.images.map((img, i) => (
// //                       <img key={i} src={img} alt="" style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 6 }} />
// //                     ))}
// //                     <span style={{ fontSize: 12, color: '#007bff' }}>+{order.extraImages}</span>
// //                   </div>
// //                 </td>
// //                 <td style={tdStyle}>{order.productName}</td>
// //                 <td style={tdStyle}>{order.orderId}</td>
// //                 <td style={tdStyle}>{order.date}</td>
// //                 <td style={tdStyle}>
// //                   <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
// //                     <img src={order.customerAvatar} alt="" style={{ width: 28, height: 28, borderRadius: '50%' }} />
// //                     {order.customerName}
// //                   </div>
// //                 </td>
// //                 <td style={tdStyle}>
// //                   <div style={getStatusStyle(order.status)}>
// //                     <span style={{
// //                       width: 8,
// //                       height: 8,
// //                       borderRadius: '50%',
// //                       background: order.status === 'Delivered' ? 'green' : 'orange'
// //                     }}></span>
// //                     {order.status}
// //                   </div>
// //                 </td>
// //                 <td style={tdStyle}>{order.amount}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* Footer Pagination */}
// //       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, flexWrap: 'wrap', gap: 10 }}>
// //         <select style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 4 }}>
// //           <option>05</option>
// //         </select>
// //         <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
// //           <span>Page 1</span>
// //           <button style={pageBtnStyle}>&lt;&lt; Previous</button>
// //           <button style={pageBtnStyle}>Next &gt;&gt;</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default OrderList;




// import React, { useState } from 'react';
// import { FiSearch, FiFilter, FiPlus } from 'react-icons/fi';
// import watchImage from '../assets/watch.jpg';

// const orders = [
//   {
//     id: 1,
//     images: [watchImage],
//     extraImages: 2,
//     productName: 'Stationary',
//     orderId: '#253254',
//     date: 'May 2nd, 2025',
//     customerName: 'Swapnil',
//     customerAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
//     status: 'Delivered',
//     amount: '₹ 35,120',
//   },
//   {
//     id: 2,
//     images: [watchImage, watchImage],
//     extraImages: 15,
//     productName: 'Grocery',
//     orderId: '#253254',
//     date: 'May 2nd, 2025',
//     customerName: 'Sakshi',
//     customerAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
//     status: 'Cancelled',
//     amount: '₹ 2,100',
//   },
//   {
//     id: 3,
//     images: [watchImage, watchImage],
//     extraImages: 15,
//     productName: 'Stationary',
//     orderId: '#253254',
//     date: 'May 2nd, 2025',
//     customerName: 'Sakshi',
//     customerAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
//     status: 'Cancelled',
//     amount: '₹ 2,100',
//   },
//   {
//     id: 4,
//     images: [watchImage],
//     extraImages: 2,
//     productName: 'Grocery',
//     orderId: '#253254',
//     date: 'May 2nd, 2025',
//     customerName: 'Swapnil',
//     customerAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
//     status: 'Delivered',
//     amount: '₹ 35,120',
//   },
//   {
//     id: 5,
//     images: [watchImage, watchImage],
//     extraImages: 15,
//     productName: 'Grocery',
//     orderId: '#253254',
//     date: 'May 2nd, 2025',
//     customerName: 'Sakshi',
//     customerAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
//     status: 'Cancelled',
//     amount: '₹ 2,100',
//   },
// ];

// const getStatusStyle = (status) => ({
//   display: 'flex',
//   alignItems: 'center',
//   gap: '6px',
//   color: status === 'Delivered' ? 'green' : 'orange',
// });

// const baseThStyle = {
//   textAlign: 'left',
//   padding: 12,
//   fontWeight: '600',
//   height: 30,
//   whiteSpace: 'nowrap',
// };

// const baseTdStyle = {
//   padding: 12,
//   verticalAlign: 'middle',
//   height: 38,
//   whiteSpace: 'nowrap',
// };

// const pageBtnStyle = {
//   padding: '6px 12px',
//   border: '1px solid #ccc',
//   borderRadius: 4,
//   background: '#fff',
//   cursor: 'pointer',
// };

// const OrderList = () => {
//   const [selectedOrders, setSelectedOrders] = useState([]);

//   const handleSelectAll = (e) => {
//     setSelectedOrders(e.target.checked ? orders.map((o) => o.id) : []);
//   };

//   const handleSelectOne = (id) => {
//     setSelectedOrders((prev) =>
//       prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
//     );
//   };

//   const isAllSelected = selectedOrders.length === orders.length;

//   return (
//     <div style={{ padding: 20, fontFamily: 'sans-serif', backgroundColor: '#fff' }}>
//       {/* Header */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
//         <h2>Order List</h2>
//         <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
//           <div style={{ position: 'relative' }}>
//             <FiSearch style={{ position: 'absolute', top: '8px', left: '10px', color: '#888' }} />
//             <input
//               type="text"
//               placeholder="Search"
//               style={{ padding: '8px 8px 8px 30px', borderRadius: 6, border: '1px solid #ccc', minWidth: 180 }}
//             />
//           </div>
//           <button style={{ border: '1px solid #ccc', padding: '8px 12px', borderRadius: 6, background: '#fff' }}>
//             <FiFilter /> Filter
//           </button>
//           <button style={{ background: '#007bff', color: '#fff', padding: '8px 12px', borderRadius: 6, border: 'none' }}>
//             <FiPlus /> Add New
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <div style={{ overflowX: 'auto' }}>
//         <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '960px' }}>
//           <thead style={{ background: '#ddd' }}>
//             <tr>
//               <th style={{ ...baseThStyle, width: '40px' }}>
//                 <input type="checkbox" checked={isAllSelected} onChange={handleSelectAll} />
//               </th>
//               <th style={{ ...baseThStyle, width: '140px' }}>Product Image</th>
//               <th style={{ ...baseThStyle, width: '160px' }}>Product Name</th>
//               <th style={{ ...baseThStyle, width: '100px' }}>Order ID</th>
//               <th style={{ ...baseThStyle, width: '120px' }}>Date</th>
//               <th style={{ ...baseThStyle, width: '160px' }}>Customer Name</th>
//               <th style={{ ...baseThStyle, width: '160px' }}>Status</th>
//               <th style={{ ...baseThStyle, width: '100px' }}>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.id} style={{ borderBottom: '1px solid #eee' }}>
//                 <td style={{ ...baseTdStyle, width: '40px' }}>
//                   <input type="checkbox" checked={selectedOrders.includes(order.id)} onChange={() => handleSelectOne(order.id)} />
//                 </td>
//                 <td style={{ ...baseTdStyle, width: '140px' }}>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
//                     {order.images.map((img, i) => (
//                       <img key={i} src={img} alt="" style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 6 }} />
//                     ))}
//                     <span style={{ fontSize: 12, color: '#007bff' }}>+{order.extraImages}</span>
//                   </div>
//                 </td>
//                 <td style={{ ...baseTdStyle, width: '160px' }}>{order.productName}</td>
//                 <td style={{ ...baseTdStyle, width: '100px' }}>{order.orderId}</td>
//                 <td style={{ ...baseTdStyle, width: '120px' }}>{order.date}</td>
//                 <td style={{ ...baseTdStyle, width: '160px' }}>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//                     <img src={order.customerAvatar} alt="" style={{ width: 28, height: 28, borderRadius: '50%' }} />
//                     {order.customerName}
//                   </div>
//                 </td>
//                 <td style={{ ...baseTdStyle, width: '120px' }}>
//                   <div style={getStatusStyle(order.status)}>
//                     <span style={{
//                       width: 8,
//                       height: 8,
//                       borderRadius: '50%',
//                       background: order.status === 'Delivered' ? 'green' : 'orange',
//                     }}></span>
//                     {order.status}
//                   </div>
//                 </td>
//                 <td style={{ ...baseTdStyle, width: '100px' }}>{order.amount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Footer */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, flexWrap: 'wrap', gap: 10 }}>
//         <select style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 4 }}>
//           <option>05</option>
//         </select>
//         <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
//           <span>Page 1</span>
//           <button style={pageBtnStyle}>&lt;&lt; Previous</button>
//           <button style={pageBtnStyle}>Next &gt;&gt;</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderList;





// import React from 'react';
// import { FiSearch, FiFilter, FiPlus } from 'react-icons/fi';
// import watchImage from '../assets/watch.jpg'

// const orders = [
//   {
//     id: 1,
//     images: [watchImage],
//     extraImages: 2,
//     productName: 'Stationary',
//     orderId: '#253254',
//     date: 'May 2nd,2025',
//     customerName: 'Swapnil',
//     customerAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
//     status: 'Delivered',
//     amount: '₹ 35,120'
//   },
//   {
//     id: 2,
//     images: [watchImage, watchImage],
//     extraImages: 15,
//     productName: 'Grocery',
//     orderId: '#253254',
//     date: 'May 2nd,2025',
//     customerName: 'Sakshi',
//     customerAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
//     status: 'Cancelled',
//     amount: '₹ 2,100'
//   },
//   {
//     id: 3,
//     images: [watchImage, watchImage],
//     extraImages: 15,
//     productName: 'Stationary',
//     orderId: '#253254',
//     date: 'May 2nd,2025',
//     customerName: 'Sakshi',
//     customerAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
//     status: 'Cancelled',
//     amount: '₹ 2,100'
//   },
//   {
//     id: 4,
//     images: [watchImage],
//     extraImages: 2,
//     productName: 'Grocery',
//     orderId: '#253254',
//     date: 'May 2nd,2025',
//     customerName: 'Swapnil',
//     customerAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
//     status: 'Delivered',
//     amount: '₹ 35,120'
//   },
//   {
//     id: 5,
//     images: [watchImage, watchImage],
//     extraImages: 15,
//     productName: 'Grocery',
//     orderId: '#253254',
//     date: 'May 2nd,2025',
//     customerName: 'Sakshi',
//     customerAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
//     status: 'Cancelled',
//     amount: '₹ 2,100'
//   }
// ];

// const getStatusStyle = (status) => {
//   const base = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '6px'
//   };
//   const color = status === 'Delivered' ? 'green' : 'orange';
//   return { ...base, color };
// };

// const thStyle = {
//   textAlign: 'left',
//   padding: 12,
//   fontWeight: '600',
//   height: 30,
//   whiteSpace: 'nowrap'
// };

// const tdStyle = {
//   padding: 12,
//   verticalAlign: 'middle',
//   height: 38,
//   whiteSpace: 'nowrap'
// };

// const pageBtnStyle = {
//   padding: '6px 12px',
//   border: '1px solid #ccc',
//   borderRadius: 4,
//   background: '#fff',
//   cursor: 'pointer'
// };

// const  OrderList = () => {
//   return (
//     <div style={{ padding: 20, fontFamily: 'sans-serif', backgroundColor: '#fff' }}>
//       {/* Header */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
//         <h2>Order List</h2>
//         <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
//           <div style={{ position: 'relative' }}>
//             <FiSearch style={{ position: 'absolute', top: '8px', left: '10px', color: '#888' }} />
//             <input
//               type="text"
//               placeholder="Search"
//               style={{ padding: '8px 8px 8px 30px', borderRadius: 6, border: '1px solid #ccc', minWidth: 180 }}
//             />
//           </div>
//           <button style={{ border: '1px solid #ccc', padding: '8px 12px', borderRadius: 6, background: '#fff' }}>
//             <FiFilter /> Filter
//           </button>
//           <button style={{ background: '#007bff', color: '#fff', padding: '8px 12px', borderRadius: 6, border: 'none' }}>
//             <FiPlus /> Add New
//           </button>
//         </div>
//       </div>

//       {/* Table with Horizontal Scroll */}
//       <div style={{ overflowX: 'auto', marginTop: 20 }}>
//         <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
//           <thead style={{ background: '#ddd' }}>
//             <tr>
//               <th style={thStyle}><input type="checkbox" /></th>
//               <th style={thStyle}>Product Image</th>
//               <th style={thStyle}>Product Name</th>
//               <th style={thStyle}>Order ID</th>
//               <th style={thStyle}>Date</th>
//               <th style={thStyle}>Customer Name</th>
//               <th style={thStyle}>Status</th>
//               <th style={thStyle}>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map(order => (
//               <tr key={order.id} style={{ borderBottom: '1px solid #eee' }}>
//                 <td style={tdStyle}><input type="checkbox" /></td>
//                 <td style={tdStyle}>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
//                     {order.images.map((img, i) => (
//                       <img key={i} src={img} alt="" style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 6 }} />
//                     ))}
//                     <span style={{ fontSize: 12, color: '#007bff' }}>+{order.extraImages}</span>
//                   </div>
//                 </td>
//                 <td style={tdStyle}>{order.productName}</td>
//                 <td style={tdStyle}>{order.orderId}</td>
//                 <td style={tdStyle}>{order.date}</td>
//                 <td style={tdStyle}>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//                     <img src={order.customerAvatar} alt="" style={{ width: 28, height: 28, borderRadius: '50%' }} />
//                     {order.customerName}
//                   </div>
//                 </td>
//                 <td style={tdStyle}>
//                   <div style={getStatusStyle(order.status)}>
//                     <span style={{
//                       width: 8,
//                       height: 8,
//                       borderRadius: '50%',
//                       background: order.status === 'Delivered' ? 'green' : 'orange'
//                     }}></span>
//                     {order.status}
//                   </div>
//                 </td>
//                 <td style={tdStyle}>{order.amount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Footer Pagination */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, flexWrap: 'wrap', gap: 10 }}>
//         <select style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 4 }}>
//           <option>05</option>
//         </select>
//         <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
//           <span>Page 1</span>
//           <button style={pageBtnStyle}>&lt;&lt; Previous</button>
//           <button style={pageBtnStyle}>Next &gt;&gt;</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderList;



// import React, { useState, useEffect } from "react";
// import { FiSearch, FiFilter, FiPlus } from "react-icons/fi";
// import watchImage from "../assets/watch.jpg"; // replace with your actual image path

// const OrderList = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const orders = Array(5).fill({
//     images: [watchImage, watchImage, watchImage],
//     productName: "Grocery",
//     orderId: "#253254",
//     date: "May 2nd, 2025",
//     customer: {
//       name: "John Smith",
//       email: "johnsmith12@gmail.com",
//       address: "123 Main St, City, Country"
//     },
//     totalAmount: "₹1249.00",
//     status: "Delivered"
//   });

//   useEffect(() => {
//     if (searchTerm.trim() === "") {
//       setFilteredOrders(orders);
//     } else {
//       const filtered = orders.filter(order =>
//         order.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         order.customer.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredOrders(filtered);
//     }
//   }, [searchTerm]);

//   return (
//     <div style={{ padding: "1rem", maxWidth: "100%", overflowX: "hidden" }}>
//       <div style={{
//         display: "flex", justifyContent: "space-between",
//         alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem"
//       }}>
//         <h2 style={{ fontSize: "1.2rem", margin: 0 }}>Order List</h2>
//         <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
//           <div style={{
//             display: "flex", alignItems: "center", backgroundColor: "#f0f0f0",
//             padding: "0.4rem 0.6rem", borderRadius: "0.5rem"
//           }}>
//             <FiSearch style={{ marginRight: "0.4rem" }} />
//             <input
//               type="text"
//               placeholder="Search orders..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               style={{
//                 border: "none", outline: "none", background: "transparent"
//               }}
//             />
//           </div>
//           <button style={{
//             display: "flex", alignItems: "center", gap: "0.4rem",
//             padding: "0.5rem 0.8rem", border: "none",
//             backgroundColor: "#e6f0ff", borderRadius: "0.5rem",
//             cursor: "pointer", color: "#2979ff"
//           }}>
//             <FiFilter /> Filter
//           </button>
//           <button style={{
//             display: "flex", alignItems: "center", gap: "0.4rem",
//             padding: "0.5rem 0.8rem", border: "none",
//             backgroundColor: "#2979ff", color: "#fff",
//             borderRadius: "0.5rem", cursor: "pointer"
//           }}>
//             <FiPlus /> Add Order
//           </button>
//         </div>
//       </div>

//       <div style={{
//         display: "flex", flexDirection: "column", gap: "1rem"
//       }}>
//         {filteredOrders.map((order, index) => (
//           <div key={index} style={{
//             display: "flex", flexDirection: "column",
//             padding: "1rem", border: "1px solid #ddd",
//             borderRadius: "0.75rem", backgroundColor: "#fff",
//             boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
//             width: "100%", maxWidth: "100%", overflowX: "auto"
//           }}>
//             <div style={{
//               display: "flex", flexWrap: "wrap",
//               justifyContent: "space-between", gap: "1rem"
//             }}>
//               {/* Product Images */}
//               <div style={{
//                 display: "flex", flexWrap: "wrap", gap: "0.5rem"
//               }}>
//                 {order.images.map((img, i) => (
//                   <img key={i} src={img} alt={`Product ${i}`}
//                     style={{
//                       width: "60px", height: "60px", borderRadius: "0.5rem",
//                       objectFit: "cover"
//                     }} />
//                 ))}
//                 {order.images.length > 2 && (
//                   <div style={{
//                     width: "60px", height: "60px", borderRadius: "0.5rem",
//                     backgroundColor: "#f0f0f0", display: "flex",
//                     alignItems: "center", justifyContent: "center",
//                     fontWeight: "bold"
//                   }}>
//                     +{order.images.length - 2}
//                   </div>
//                 )}
//               </div>

//               {/* Order Info */}
//               <div style={{ flex: 1, minWidth: "200px" }}>
//                 <h3 style={{ margin: 0 }}>{order.productName}</h3>
//                 <p style={{ margin: "0.25rem 0", fontSize: "0.9rem" }}>{order.orderId}</p>
//                 <p style={{ margin: 0, fontSize: "0.8rem", color: "#666" }}>{order.date}</p>
//               </div>

//               {/* Customer Info */}
//               <div style={{ flex: 1, minWidth: "200px" }}>
//                 <p style={{ margin: 0 }}>{order.customer.name}</p>
//                 <p style={{ margin: 0, fontSize: "0.8rem", color: "#666" }}>{order.customer.email}</p>
//                 <p style={{ margin: 0, fontSize: "0.8rem", color: "#666" }}>{order.customer.address}</p>
//               </div>

//               {/* Order Summary */}
//               <div style={{
//                 display: "flex", flexDirection: "column",
//                 alignItems: "flex-end", justifyContent: "center",
//                 minWidth: "120px"
//               }}>
//                 <p style={{ margin: 0, fontWeight: "bold" }}>{order.totalAmount}</p>
//                 <span style={{
//                   backgroundColor: "#d4edda", color: "#155724",
//                   padding: "0.2rem 0.5rem", borderRadius: "0.5rem",
//                   fontSize: "0.75rem", marginTop: "0.25rem"
//                 }}>
//                   {order.status}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OrderList;



// import React from 'react';
// import { FiSearch, FiFilter, FiPlus } from 'react-icons/fi';
// import watchImage from '../assets/watch.jpg'

// const orders = [
//   {
//     id: 1,
//     images: [watchImage],
//     extraImages: 2,
//     productName: 'Stationary',
//     orderId: '#253254',
//     date: 'May 2nd,2025',
//     customerName: 'Swapnil',
//     customerAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
//     status: 'Delivered',
//     amount: '₹ 35,120'
//   },
//   {
//     id: 2,
//     images: [watchImage, watchImage],
//     extraImages: 15,
//     productName: 'Grocery',
//     orderId: '#253254',
//     date: 'May 2nd,2025',
//     customerName: 'Sakshi',
//     customerAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
//     status: 'Cancelled',
//     amount: '₹ 2,100'
//   },
//   {
//     id: 3,
//     images: [watchImage, watchImage],
//     extraImages: 15,
//     productName: 'Stationary',
//     orderId: '#253254',
//     date: 'May 2nd,2025',
//     customerName: 'Sakshi',
//     customerAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
//     status: 'Cancelled',
//     amount: '₹ 2,100'
//   },
//   {
//     id: 4,
//     images: [watchImage],
//     extraImages: 2,
//     productName: 'Grocery',
//     orderId: '#253254',
//     date: 'May 2nd,2025',
//     customerName: 'Swapnil',
//     customerAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
//     status: 'Delivered',
//     amount: '₹ 35,120'
//   },
//   {
//     id: 5,
//     images: [watchImage, watchImage],
//     extraImages: 15,
//     productName: 'Grocery',
//     orderId: '#253254',
//     date: 'May 2nd,2025',
//     customerName: 'Sakshi',
//     customerAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
//     status: 'Cancelled',
//     amount: '₹ 2,100'
//   }
// ];

// const getStatusStyle = (status) => {
//   const base = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '6px'
//   };
//   const color = status === 'Delivered' ? 'green' : 'orange';
//   return { ...base, color };
// };

// const thStyle = {
//   textAlign: 'left',
//   padding: 12,
//   fontWeight: '600',
//   height: 30,
//   whiteSpace: 'nowrap'
// };

// const tdStyle = {
//   padding: 12,
//   verticalAlign: 'middle',
//   height: 38,
//   whiteSpace: 'nowrap'
// };

// const pageBtnStyle = {
//   padding: '6px 12px',
//   border: '1px solid #ccc',
//   borderRadius: 4,
//   background: '#fff',
//   cursor: 'pointer'
// };

// const OrderList = () => {
//   return (
//     <div style={{ padding: 20, fontFamily: 'sans-serif', backgroundColor: '#fff' }}>
//       {/* Header */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
//         <h2>Order List</h2>
//         <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
//           <div style={{ position: 'relative' }}>
//             <FiSearch style={{ position: 'absolute', top: '8px', left: '10px', color: '#888' }} />
//             <input
//               type="text"
//               placeholder="Search"
//               style={{ padding: '8px 8px 8px 30px', borderRadius: 6, border: '1px solid #ccc', minWidth: 180 }}
//             />
//           </div>
//           <button style={{ border: '1px solid #ccc', padding: '8px 12px', borderRadius: 6, background: '#fff' }}>
//             <FiFilter /> Filter
//           </button>
//           <button style={{ background: '#007bff', color: '#fff', padding: '8px 12px', borderRadius: 6, border: 'none' }}>
//             <FiPlus /> Add New
//           </button>
//         </div>
//       </div>

//       {/* Table with Horizontal Scroll */}
//       <div style={{ overflowX: 'auto', marginTop: 20 }}>
//         <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
//           <thead style={{ background: '#ddd' }}>
//             <tr>
//               <th style={thStyle}><input type="checkbox" /></th>
//               <th style={thStyle}>Product Image</th>
//               <th style={thStyle}>Product Name</th>
//               <th style={thStyle}>Order ID</th>
//               <th style={thStyle}>Date</th>
//               <th style={thStyle}>Customer Name</th>
//               <th style={thStyle}>Status</th>
//               <th style={thStyle}>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map(order => (
//               <tr key={order.id} style={{ borderBottom: '1px solid #eee' }}>
//                 <td style={tdStyle}><input type="checkbox" /></td>
//                 <td style={tdStyle}>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
//                     {order.images.map((img, i) => (
//                       <img key={i} src={img} alt="" style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 6 }} />
//                     ))}
//                     <span style={{ fontSize: 12, color: '#007bff' }}>+{order.extraImages}</span>
//                   </div>
//                 </td>
//                 <td style={tdStyle}>{order.productName}</td>
//                 <td style={tdStyle}>{order.orderId}</td>
//                 <td style={tdStyle}>{order.date}</td>
//                 <td style={tdStyle}>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//                     <img src={order.customerAvatar} alt="" style={{ width: 28, height: 28, borderRadius: '50%' }} />
//                     {order.customerName}
//                   </div>
//                 </td>
//                 <td style={tdStyle}>
//                   <div style={getStatusStyle(order.status)}>
//                     <span style={{
//                       width: 8,
//                       height: 8,
//                       borderRadius: '50%',
//                       background: order.status === 'Delivered' ? 'green' : 'orange'
//                     }}></span>
//                     {order.status}
//                   </div>
//                 </td>
//                 <td style={tdStyle}>{order.amount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Footer Pagination */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, flexWrap: 'wrap', gap: 10 }}>
//         <select style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 4 }}>
//           <option>05</option>
//         </select>
//         <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
//           <span>Page 1</span>
//           <button style={pageBtnStyle}>&lt;&lt; Previous</button>
//           <button style={pageBtnStyle}>Next &gt;&gt;</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderList;







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
