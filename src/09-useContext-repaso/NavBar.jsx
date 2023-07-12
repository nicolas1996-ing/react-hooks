import React from "react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "./shared/routes";

export const NavBar = () => {
  return (
    <>
      {/* navBar */}

      <nav className="navbar navbar-dark  bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            UseContext
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {routes.map(
                (r) =>
                  r.validToLink && (
                    <li className="nav-item" key={r.name}>
                      {/* NavLink permite añadir el sombreado a la ruta activa */}
                      <NavLink
                        to={r.path}
                        className={({ isActive }) =>
                          `nav-link ${isActive ? "active" : ""}`
                        }
                      >
                        {r.name}
                      </NavLink>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
