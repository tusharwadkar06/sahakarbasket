// import React from "react";
// import { FaBell } from "react-icons/fa";

// const Topbar = () => {
//   const topbarStyle = {
//     backgroundColor: "#ffffff",
//     padding: "10px 10px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     borderBottom: "1px solid #ccc",
//     marginBottom: "0px",
//     height: "32px"
//   };

//   const inputStyle = {
//     padding: "8px 12px",
//     borderRadius: "4px",
//     border: "1px solid #ccc",
//     width: "250px"
//   };

//   return (
//     <div style={topbarStyle}>
//       <input type="text" placeholder="Search..." style={inputStyle} />
//       <FaBell size={20} />
//     </div>
//   );
// };

// export default Topbar;





import React from "react";
import { FaBell } from "react-icons/fa";

const Topbar = () => {
  return (
    <div style={{
      backgroundColor: "#ffffff", padding: "10px",
      display: "flex", justifyContent: "space-between",
      alignItems: "center", borderBottom: "1px solid #ccc"
    }}>
      <input
        type="text"
        placeholder="Search..."
        style={{
          padding: "8px 12px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          width: "250px"
        }}
      />
      <FaBell size={20} />
    </div>
  );
};

export default Topbar;
