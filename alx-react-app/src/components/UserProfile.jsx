import React from "react";

const UserProfile = ({ name, age, bio }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.info}>Age: {age}</p>
      <p style={styles.bio}>{bio}</p>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px",
    maxWidth: "300px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  },
  name: {
    color: "#333",
    fontSize: "20px",
    fontWeight: "bold",
  },
  info: {
    color: "#666",
    fontSize: "16px",
  },
  bio: {
    color: "#444",
    fontSize: "14px",
  },
};

export default UserProfile;
