import { useEffect, useState } from "react";
import "./Styles.css";
import Suggestions from "./suggestions";



const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  async function fetchListOfUsers() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }
  console.log(users, filteredUsers);

  function handleClick(e) {
    console.log(e.target.innerText);
    setShowDropDown(false);
    setSearchParam(e.target.innerText);
    setFilteredUsers("");
  }

  return (
    <div className="search-autocomplete-container">
      <div className="autoComplete">
        <h1>Search AutoComplete</h1>
        {loading ? (
          <h1>Loading data please wait</h1>
        ) : (
          <input
            type="text"
            name="search-users"
            placeholder="search Users here..."
            value={searchParam}
            onChange={handleChange}
          />
        )}
        {showDropDown && (
          <Suggestions handleClick={handleClick} data={filteredUsers} />
        )}
      </div>
    </div>
  );
};

export default SearchAutoComplete;
