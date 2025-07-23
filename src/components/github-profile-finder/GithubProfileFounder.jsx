import React, { useEffect, useState } from "react";
import "./styles.css";
const GithubProfileFounder = () => {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  async function handleSearch() {
    console.log("functioon called");

    if (!userName.trim()) {
      setError("Please enter a GitHub username.");
      setUserData(null);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();

      if (data.message === "Not Found") {
        setError("User Not Found");
        setUserData(null);
      } else {
        setUserData(data);
        setError(null);
      }
      console.log(userData);
    } catch (error) {
      setUserData(null);
      console.log(`this is error ${error}`);
    } finally {
      setUserName("");
      setLoading(false);
    }
  }
  const {
    login,
    id,
    html_url,
    public_repos,
    followers,
    following,
    created_at,
  } = userData || {};

  return (
    <div className="container">
      <h1>GitHub Profile Finder</h1>
      <div className="input-section">
        <input
          onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : null)}
          onChange={(event) => setUserName(event.target.value)}
          type="text"
          placeholder="Enter github handle"
          value={userName}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>

      <div className="profile-wrapper">
        {loading && <div>{"Loading..."}</div>}
        {error && <div>{error}</div>}

        {userData && (
          <>
            <img
              className="profile"
              src={`https://avatars.githubusercontent.com/u/${id}?v=4`}
              alt={`${login} pic`}
            />
            <h2>
              <a href={html_url} rel="noopener noreferrer">
                {login}
              </a>
            </h2>
            <p>Public repositories : {public_repos}</p>
            <p>Followers : {followers}</p>
            <p>Followings : {following}</p>
            <p>Account Created : {new Date(created_at).toLocaleDateString()}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default GithubProfileFounder;
