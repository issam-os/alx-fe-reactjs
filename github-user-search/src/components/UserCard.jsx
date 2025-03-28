import React from "react";

function UserCard({ user }) {
  return (
    <div className="mt-4 border p-4 rounded shadow-md w-80 text-center">
      <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-lg font-semibold mt-2">{user.name || user.login}</h2>
      <p className="text-gray-600">{user.bio}</p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2 inline-block"
      >
        View Profile
      </a>
    </div>
  );
}

export default UserCard;
