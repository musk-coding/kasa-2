import React from "react";
import { NavLink } from "react-router-dom";

export default function StyledNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      style={{ textDecoration: "none", color: "var(--main-red)" }}
      activeStyle={{ textDecoration: "underline" }}
      exact={true}
    >
      {children}
    </NavLink>
  );
}
