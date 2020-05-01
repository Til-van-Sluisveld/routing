import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <span>
          <NavLink
            exact
            to="/home"
            activeStyle={{ fontWeight: "bold", color: "red" }}
          >
            {" "}
            Home{" "}
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/about"
            activeStyle={{ fontWeight: "bold", color: "red" }}
          >
            {" "}
            About this website{" "}
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/discover"
            activeStyle={{ fontWeight: "bold", color: "red" }}
          >
            {" "}
            Discover Movies{" "}
          </NavLink>
        </span>
      </nav>
    </div>
  );
}
