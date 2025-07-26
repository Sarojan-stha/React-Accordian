import React, { useEffect, useState } from "react";

const SearchAutoComplete = () => {
  const [searchParam, setsearchParam] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  console.log(filteredUsers);

  const url = "https://dummyjson.com/users";

  async function fetchUsers() {
    const response = await fetch(url);
    const { users } = await response.json();
    setUsersData(users);
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
    <div>
      SearchAutoComplete
      <input
        value={searchParam}
        onChange={(e) => {
          setsearchParam(e.target.value);
        }}
        type="text"
        placeholder="Search users"
      />
      <div>
        {filteredUsers.length > 0 &&
          filteredUsers.map((user) => {
            return (
              <div
                onClick={() =>
                  setsearchParam(`${user.firstName} ${user.lastName}`)
                }
              >{`${user.firstName} ${user.lastName}`}</div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchAutoComplete;
