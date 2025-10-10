import React from "react";
import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";
import { clsx } from "clsx";

const Navigation = () => {
  return (
    <header>
      <nav className={css.navigation}>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, isActive && css.linkActive)
          }
          to="/"
        >
          Home
        </NavLink>{" "}
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, isActive && css.linkActive)
          }
          to="/ts"
        >
          TS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, isActive && css.linkActive)
          }
          to="/m1"
        >
          M1
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, isActive && css.linkActive)
          }
          to="/m2"
        >
          M2
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, isActive && css.linkActive)
          }
          to="/m3"
        >
          M3
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, isActive && css.linkActive)
          }
          to="/m4"
        >
          M4
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, isActive && css.linkActive)
          }
          to="/m5"
        >
          M5
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, isActive && css.linkActive)
          }
          to="/m5-posts"
        >
          M5 Posts
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, isActive && css.linkActive)
          }
          to="/m6"
        >
          M6
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
