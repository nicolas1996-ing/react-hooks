import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  const paths = [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/about",
      name: "about",
    },
    {
      path: "/login",
      name: "login",
    },
  ];
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav container">
            <li className="nav-item row">
              {/* el uso de link evita el refresh de la pagina */}
              {paths.map((path) => (
                // agg sombreado clase activa [isActive]
                <NavLink
                  to={path.path}
                  key={path.name}
                  className={({ isActive }) => {
                    if (isActive) {
                      return "nav-link active col";
                    } else {
                      return "nav-link col";
                    }
                  }}
                >
                  {path.name}
                </NavLink>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
