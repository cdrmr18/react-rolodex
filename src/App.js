import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";
import "./App.css";

const App = () => {
  const { users, setUsers } = useState([]);
  const { value, setValue } = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        response.json();
      })
      .then((data) => setUsers(data));
  }, [setUsers]);

  const onSearchChange = (e) => {
    setValue(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return user.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className="App">
      <h1 className="app-title">Rolodex</h1>
      <SearchBox
        className="monster-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList filteredUsers={filteredUsers} />
    </div>
  );
};

export default App;
