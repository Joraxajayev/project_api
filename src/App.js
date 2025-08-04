import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [state, setstate] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setstate(data))
      .catch((error) => console.error("Error fetching users:", error));
  });

  return (
    <div className="App">
      <h1>Users</h1>
      <ul className="userList">
        {state.map((user) => {
          return (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
