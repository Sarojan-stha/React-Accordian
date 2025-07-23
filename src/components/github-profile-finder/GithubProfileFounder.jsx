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
        {error && <div>{error}</div>}

        {userData && (
          <>
            <img
              className="profile"
              src={`https://avatars.githubusercontent.com/u/${id}?v=4`}
              alt={`${login} pic`}
            />
            <a href={html_url}>{login}</a>
            <p>Repos={public_repos}</p>
            <p>followers = {followers}</p>
            <p>followings = {following}</p>
            <p>Created at {created_at}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default GithubProfileFounder;
