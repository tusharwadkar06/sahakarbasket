// this is credit society page in platformAdmin

import React from "react";
import { FaFilter } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import Breadcrumb from "../components/Breadcrumb";

const CreditSociety = () => {
    const organizations = new Array(10).fill({
        societyName: "abc",
        registrationNo: "abc",
        phoneNo: "abc",
        emailId: "abc",
        address: "abc",
        location: "abc",
        type: "abc",
    });

    return (
        <div>
            <Breadcrumb paths={[{ name: "Society",link: "/society" }, { name: "CreditSociety", highlight: true }]} />
            <div style={containerStyle}>
                {/* Header + Actions */}
                <div style={headerStyle}>
                    <h2 style={titleStyle}>Organizations</h2>
                    <div style={actionsStyle}>
                        <input
                            type="text"
                            placeholder="Search"
                            style={searchInputStyle}
                        />
                        <button style={filterBtnStyle}>
                            <FaFilter />
                        </button>
                        <button style={addBtnStyle}>
                            <FiPlus /> Add
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div style={tableWrapperStyle}>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                {["Society Name", "Registration No.", "Phone No.", "Email ID", "Office Address", "Location", "Society type"].map((header) => (
                                    <th key={header} style={thStyle}>
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {organizations.map((org, idx) => (
                                <tr key={idx}>
                                    <td style={tdStyle}>{org.societyName}</td>
                                    <td style={tdStyle}>{org.registrationNo}</td>
                                    <td style={tdStyle}>{org.phoneNo}</td>
                                    <td style={tdStyle}>{org.emailId}</td>
                                    <td style={tdStyle}>{org.address}</td>
                                    <td style={tdStyle}>{org.location}</td>
                                    <td style={tdStyle}>{org.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};



const containerStyle = {
    padding: "20px",
    flex: 1,
    backgroundColor: "#fff",
    height: "80vh",

};

const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "5px",
    paddingTop: "0px",
};

const titleStyle = {
    fontSize: "20px",
};

const actionsStyle = {
    display: "flex",
    gap: "8px",
    alignItems: "center",
};

const searchInputStyle = {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "220px",
    backgroundColor: "#fff",
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
};

const filterBtnStyle = {
    padding: "8px 10px",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    height: "38px",
};

const addBtnStyle = {
    padding: "8px 18px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    cursor: "pointer",
    fontWeight: 500,
    fontSize: "16px",
    height: "38px",
};

const tableWrapperStyle = {
    overflowY: "auto",
    backgroundColor: "#fff",
    borderRadius: "5px",
    marginTop: "0px",
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
};

const thStyle = {
    padding: "12px",
    textAlign: "left",
    border: "1px solid #e5e7eb",
    fontWeight: 600,
    background: "#f5f5f5",
};

const tdStyle = {
    padding: "12px",
    border: "1px solid #e5e7eb",
    background: "#fff",
};

export default CreditSociety;
