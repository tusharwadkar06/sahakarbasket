import React from "react";
import clusterImg from "../assets/images/cluster.png";
import societyImg from "../assets/images/society.png";
import merchantImg from "../assets/images/merchants.png";
import productImg from "../assets/images/product.png";
import { MdOutlineDragIndicator } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";

const stats = [
  { title: "Total Clusters", count: 3516 },
  { title: "Total Societies", count: 2489 },
  { title: "Total Merchants", count: 1057 },
  { title: "Total Products", count: 8745 },
];

const cards = [
  { title: "Cluster", img: clusterImg },
  { title: "Society", img: societyImg },
  { title: "Merchants", img: merchantImg },
  { title: "Products", img: productImg },
];

const PlatformDashboard = () => {
  return (
    <div className="dashboard-content-wrapper">

      {/* Stats Overview */}
      <div className="dashboard-stats">
        {stats.map((item, idx) => (
          <div className="dashboard-stat-card" key={idx}>
            <FaRegDotCircle className="stat-icon" />
            <div>
              <p className="stat-title">{item.title}</p>
              <h3 className="stat-count">{item.count}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Cards Section */}
      <div className="dashboard-cards">
        {cards.map((item, idx) => (
          <div className="dashboard-card" key={idx}>
            <img src={item.img} alt={item.title} className="card-img" />
            <p className="card-title">{item.title}</p>
          </div>
        ))}
        {/* Drag Drop Placeholder */}
        <div className="dashboard-card drag-drop">
          <MdOutlineDragIndicator size={40} className="drag-icon" />
          <p className="drag-text">Drag and Drop your Item</p>
        </div>
      </div>

      {/* Component Styles */}
      <style>{`
       .dashboard-content-wrapper {
  padding: 24px 32px;
  background-color: #f9fafb;
  /* No height here. Flex takes care of it */
  box-sizing: border-box;
}
        .dashboard-header {
          margin-bottom: 24px;
        }
        .dashboard-title {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 6px;
          color: #1f2937;
        }
        .dashboard-subtitle {
          font-size: 14px;
          color: #6b7280;
        }
        .dashboard-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 30px;
        }
        .dashboard-stat-card {
          flex: 1;
          min-width: 220px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        }
        .stat-icon {
          color: #3b82f6;
          font-size: 24px;
        }
        .stat-title {
          font-size: 14px;
          color: #6b7280;
          margin: 0;
        }
        .stat-count {
          font-size: 22px;
          font-weight: bold;
          margin: 0;
          color: #111827;
        }
        .dashboard-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          height: 500px;
          overflow-y: auto;
        }
        .dashboard-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          box-shadow: 0 1px 4px rgba(0,0,0,0.03);
          min-height: 150px;
          width: 90%;
        
        }
        .dashboard-card:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.07);
        }
        .card-img {
          width: 150px;
          height: 150px;
          object-fit: contain;
          margin-bottom: 12px;
        }
        .card-title {
          font-size: 20px;
          font-weight: 600;
          color: #374151;
        }
        .drag-drop {
          border: 2px dashed #c7d2fe;
          background: #f0f4ff;
        }
        .drag-icon {
          color: #3b82f6;
          margin-bottom: 10px;
        }
        .drag-text {
          font-size: 14px;
          color: #6b7280;
          text-align: center;
        }

        @media (max-width: 768px) {
          .dashboard-stats {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default PlatformDashboard;
