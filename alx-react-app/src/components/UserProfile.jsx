import React from "react";

const UserProfile = ({ name, age, bio }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.info}><strong>Âge:</strong> {age}</p>
      <p style={styles.bio}><em>{bio}</em></p>
    </div>
  );
};

const styles = {
  container: {
    border: "2px solid #4CAF50",
    borderRadius: "10px",
    padding: "20px",
    margin: "15px auto",
    maxWidth: "350px",
    backgroundColor: "#f0fff4",
    textAlign: "center",
    boxShadow: "4px 4px 15px rgba(0,0,0,0.1)",
  },
  name: {
    color: "#2E7D32",
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  info: {
    color: "#555",
    fontSize: "18px",
  },
  bio: {
    color: "#666",
    fontSize: "16px",
    fontStyle: "italic",
  },
};

export default UserProfile;
