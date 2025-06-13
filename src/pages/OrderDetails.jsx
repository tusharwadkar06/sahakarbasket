import React, { useState, useEffect } from "react";

import OrderCustomer from "../assets/images/OrderCustomer.svg";
import OrderInfo from "../assets/images/OrderInfo.svg";
import DeliverTo from "../assets/images/DeliverTo.svg";
import watchImage from "../assets/images/watch.jpg";
import Breadcrumb from "../components/Breadcrumb";

const OrderDetails = () => {
  const getToday = () => new Date().toISOString().split("T")[0];

  const [status, setStatus] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const today = getToday();
    setFromDate(today);
    setToDate(today);

    const sampleData = [
      {
        id: 1,
        image: watchImage,
        name: "Product 1",
        orderId: "ORD-1001",
        quantity: 2,
        amount: "499.00",
        moreImages: 3,
      },
      {
        id: 2,
        image: watchImage,
        name: "Product 2",
        orderId: "ORD-1002",
        quantity: 1,
        amount: "999.00",
        moreImages: 1,
      },
      {
        id: 3,
        image: watchImage,
        name: "Product 3",
        orderId: "ORD-1003",
        quantity: 4,
        amount: "749.00",
        moreImages: 2,
      },
      {
        id: 4,
        image: watchImage,
        name: "Product 4",
        orderId: "ORD-1004",
        quantity: 3,
        amount: "349.00",
        moreImages: 5,
      },
      {
        id: 5,
        image: watchImage,
        name: "Product 5",
        orderId: "ORD-1005",
        quantity: 2,
        amount: "899.00",
        moreImages: 1,
      },
      {
        id: 6,
        image: watchImage,
        name: "Product 6",
        orderId: "ORD-1006",
        quantity: 1,
        amount: "559.00",
        moreImages: 4,
      },
      {
        id: 7,
        image: watchImage,
        name: "Product 7",
        orderId: "ORD-1007",
        quantity: 5,
        amount: "649.00",
        moreImages: 2,
      },
      {
        id: 8,
        image: watchImage,
        name: "Product 8",
        orderId: "ORD-1008",
        quantity: 1,
        amount: "299.00",
        moreImages: 1,
      },
    ];

    setTransactions(sampleData);
  }, []);

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedIds([]);
    } else {
      setSelectedIds(transactions.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  const toggleSelectOne = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    setSelectAll(
      transactions.length > 0 &&
        transactions.every((txn) => selectedIds.includes(txn.id))
    );
  }, [selectedIds, transactions]);

  const handleStatusChange = (e) => setStatus(e.target.value);

  const handleSave = () => {
    console.log("Status saved:", status);
    console.log("From Date:", fromDate);
    console.log("To Date:", toDate);
  };

  const cards = [
    {
      img: OrderCustomer,
      title: "Customer",
      info: [
        { label: "First Name", value: "John Doe" },
        { label: "Email", value: "john.doe@example.com" },
        { label: "Phone", value: "+1 123-456-7891" },
      ],
      buttonText: "View Profile",
      buttonColor: "#007bff",
    },
    {
      img: OrderInfo,
      title: "Order Info",
      info: [
        { label: "Shipping", value: "FedEx Express" },
        { label: "Payment", value: "Credit Card" },
        { label: "Status", value: "Processing" },
      ],
      buttonText: "Download Info",
      buttonColor: "#28a745",
    },
    {
      img: DeliverTo,
      title: "Deliver To",
      info: [
        {
          label: "Address",
          value:
            "1234 Main Street, Apartment 56B, 12th Floor, West Wing, Tower B, Cityview Heights, Downtown Sector, New York, NY 10001, USA",
        },
      ],
      buttonText: "View Profile",
      buttonColor: "#007bff",
    },
  ];

  return (
    <div
      style={{
        padding: "5px",
        maxWidth: "1350px",
        margin: "1px",
        width: "100%",
      }}
    >
      {/* <NavLink to="/home">Home &gt; Order Details</NavLink> */}
      <Breadcrumb
        paths={[
          { name: "Home", link: "/" },
          { name: "OrderDetails", highlight: true },
        ]}
      />
      {/* Rectangle 1: Order Details */}
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "15px",
          borderRadius: "12px",
          marginTop: "20px",
          border: "1px solid #ddd",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "24px",
              gap: "10px",
            }}
          >
            <span>Order Details</span>
            <span
              style={{
                backgroundColor: "orange",
                color: "black",
                padding: "4px 8px",
                borderRadius: "4px",
                fontSize: "15px",
              }}
            >
              Pending
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <select
              value={status}
              onChange={handleStatusChange}
              style={{
                padding: "10px 15px",
                fontSize: "16px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            >
              <option value="">Change Status</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <button
              onClick={handleSave}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Save
            </button>
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          {fromDate} - {toDate}
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ display: "flex", gap: "20px" }}>
                <img
                  src={card.img}
                  alt={card.title}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
                    {card.title}
                  </h3>
                  {card.info.map((item, idx) => (
                    <p key={idx} style={{ margin: "4px 0" }}>
                      <strong>{item.label}:</strong> {item.value}
                    </p>
                  ))}
                </div>
              </div>

              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  style={{
                    padding: "8px 16px",
                    fontSize: "14px",
                    backgroundColor: card.buttonColor,
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rectangle 2: Product Transactions */}
      <div
        style={{
          marginTop: "30px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid #ddd",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ marginBottom: "16px" }}>Product Transactions</h2>

        <div
          style={{
            overflowX: "auto",
            borderRadius: "8px",
            border: "1px solid #E5E7EB",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ backgroundColor: "#f1f5f9" }}>
              <tr>
                <th style={{ padding: "12px", textAlign: "left" }}>
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th style={{ padding: "12px", textAlign: "left" }}>Image</th>
                <th style={{ padding: "12px", textAlign: "left" }}>
                  Product Name
                </th>
                <th style={{ padding: "12px", textAlign: "left" }}>Order ID</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Quantity</th>
                <th style={{ padding: "12px", textAlign: "left" }}>
                  Amount (₹)
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(
                ({
                  id,
                  image,
                  name,
                  orderId,
                  quantity,
                  amount,
                  moreImages,
                }) => (
                  <tr key={id} style={{ borderBottom: "1px solid #E5E7EB" }}>
                    <td style={{ padding: "12px" }}>
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(id)}
                        onChange={() => toggleSelectOne(id)}
                      />
                    </td>
                    <td style={{ padding: "12px" }}>
                      <div
                        style={{
                          position: "relative",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        <img
                          src={image}
                          alt={name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                        {moreImages > 1 && (
                          <div
                            style={{
                              position: "absolute",
                              top: "15px",
                              right: "-30px",
                              color: "black",
                              fontSize: "12px",
                              padding: "2px 4px",
                              borderRadius: "0 8px 0 4px",
                            }}
                          >
                            +{moreImages}
                          </div>
                        )}
                      </div>
                    </td>
                    <td style={{ padding: "12px" }}>{name}</td>
                    <td style={{ padding: "12px" }}>{orderId}</td>
                    <td style={{ padding: "12px" }}>{quantity}</td>
                    <td style={{ padding: "12px" }}>{amount}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                padding: "16px",
                borderRadius: "8px",
                width: "300px",
                border: "1px solid #ddd",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "9px",
                }}
              >
                <strong>Subtotal:</strong>
                <span>₹3,204.00</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "9px",
                }}
              >
                <strong>Tax (20%):</strong>
                <span>₹640.32</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "9px",
                }}
              >
                <strong>Discount:</strong>
                <span>₹0.00</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "9px",
                }}
              >
                <strong>Shipping Rate:</strong>
                <span>₹0.00</span>
              </div>
              <hr style={{ margin: "12px 0" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                <span>Total:</span>
                <span>₹3,844.32</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;