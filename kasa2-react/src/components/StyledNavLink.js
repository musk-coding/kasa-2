import React from "react";
import { NavLink } from "react-router-dom";
import Colors from "../shared/constants";

export default function StyledNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      style={{ textDecoration: "none", color: Colors.RED }}
      activeStyle={{ textDecoration: "underline" }}
      exact={true}
    >
      {children}
    </NavLink>
  );
}
