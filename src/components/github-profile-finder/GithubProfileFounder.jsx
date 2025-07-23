import React, { useState } from "react";

const GithubProfileFounder = () => {
  const [userName, setUserName] = useState(null);

  async function handleSearch() {
    console.log("functioon called");
    try {
      const response = await fetch(`https://api.github.com/users/sarojan-stha`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <input
        onChange={(event) => setUserName(event.target.value)}
        type="text"
        placeholder="Enter github handle"
      />
      <button onClick={() => handleSearch()}>Search</button>
      <div className="profile-wrapper"></div>
    </div>
  );
};

export default GithubProfileFounder;
