import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-active" : undefined)}
          >
            Accueil
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "nav-active" : undefined)}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
