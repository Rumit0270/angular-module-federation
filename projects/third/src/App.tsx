import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import { isStandalone } from "./utils/util";
import { UserList } from "./components/UserList/UserList";

const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
  { name: "Charlie", email: "charlie@example.com" },
  { name: "David", email: "david@example.com" },
  { name: "Eve", email: "eve@example.com" },
  { name: "Frank", email: "frank@example.com" },
  { name: "Grace", email: "grace@example.com" },
  { name: "Henry", email: "henry@example.com" },
  { name: "Ivy", email: "ivy@example.com" },
  { name: "Jack", email: "jack@example.com" },
];

function App() {
  return (
    <div className="container">
      <Router basename={isStandalone ? "/" : "/third"}>
        <Routes>
          <Route
            path="user-list"
            element={
              <UserList
                users={users}
                onClick={(user) => {
                  alert(`User clicked: ${user.name}`);
                }}
              />
            }
          />

          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
