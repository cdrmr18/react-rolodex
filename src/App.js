import { useEffect, useState } from "react";
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

  const filteredUsers = users.filter((user) => {
    return user.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className="App">
      <input
        className="search"
        type="search"
        placeholder="search monsters"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {filteredUsers.map((user) => {
        return <h1 key={user.id}>{user.name}</h1>;
      })}
    </div>
  );
};

export default App;
