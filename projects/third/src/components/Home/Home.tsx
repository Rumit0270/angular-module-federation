import { Link } from "react-router-dom";

import "./Home.css";
import logo from "../../logo.svg";

const Home = () => {
  return (
    <div>
      <h1 className="app-title">
        Welcome to React App
        <img src={logo} alt="React Logo" />
      </h1>
      <Link to="user-list">Show Users</Link>
      {/* 
      <button
        type="button"
        onClick={() => (window.location.href = "/first/todos?id=1")}
      >
        Show Todos
      </button> */}
    </div>
  );
};

export default Home;
