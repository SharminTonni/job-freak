import { NavLink, Outlet } from "react-router-dom";
import "./Main.css";
const Main = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ padding: "10px 25px", backgroundColor: "beige" }}>
        <ul style={{ listStyle: "none", fontSize: "18px" }}>
          <li style={{ margin: "5px" }}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none", color: "black" }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li style={{ margin: "5px" }}>
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li style={{ margin: "5px" }}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none", color: "black" }}
              to="/information"
            >
              Information
            </NavLink>
          </li>
          <li style={{ margin: "5px" }}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none", color: "black" }}
              to="/guides"
            >
              Guides
            </NavLink>
          </li>
        </ul>
      </div>
      <div style={{ width: "100%" }}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
