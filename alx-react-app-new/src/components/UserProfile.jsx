import React from "react";

const UserProfile = ({ name, age, bio }) => {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", margin: "10px", maxWidth: "300px", backgroundColor: "#f9f9f9", textAlign: "center", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ color: "#333", fontSize: "20px", fontWeight: "bold" }}>{name}</h2>
      <p style={{ color: "#666", fontSize: "16px" }}>Age: {age}</p>
      <p style={{ color: "#444", fontSize: "14px" }}>{bio}</p>
    </div>
  );
};

export default UserProfile;
