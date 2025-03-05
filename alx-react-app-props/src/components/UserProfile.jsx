import { useContext } from "react";
import UserContext from "../UserContext"; // Importer le contexte

const UserProfile = () => {
  const { userData } = useContext(UserContext); // Récupérer userData du contexte

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px", borderRadius: "5px" }}>
      <h2 style={{ color: "blue" }}>{userData?.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{userData?.age || "N/A"}</span>
      </p>
      <p>Bio: {userData?.bio || "Pas de bio disponible"}</p>
    </div>
  );
};

export default UserProfile;
