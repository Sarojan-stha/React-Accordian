import React, { useEffect, useState } from "react";
import "./styles.css";

const SearchAutoComplete = () => {
  const [searchParam, setsearchParam] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(filteredUsers);

  const url = "https://dummyjson.com/users";

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await fetch(url);
      const { users } = await response.json();
      setUsersData(users);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (searchParam != "") {
      const filtered = usersData.filter((user) =>
        user.firstName.toLowerCase().startsWith(searchParam.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchParam]);

  return (
    <div className="container">
      <h1>SearchAutoComplete</h1>
      <div className="input-wrapper">
        <input
          value={searchParam}
          onChange={(e) => {
            setsearchParam(e.target.value);
          }}
          type="text"
          placeholder="Search users"
        />
        <div className="suggestion">
          {filteredUsers.length > 0 &&
            filteredUsers.map((user) => {
              return (
                <li
                  onClick={() =>
                    setsearchParam(`${user.firstName} ${user.lastName}`)
                  }
                >{`${user.firstName} ${user.lastName}`}</li>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchAutoComplete;
