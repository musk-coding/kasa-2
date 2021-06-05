import React from "react";
import styled from "styled-components";
import { StyledNavLink } from "./";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 15px;
  height: 100px;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;
const Li = styled.li`
  &:first-child a {
    margin-right: 25px;
  }
`;

export default function NavBar() {
  return (
    <>
      <Nav>
        <StyledNavLink to="/">
          <img className="logo" src="svg/logo.svg" alt="logo" />
        </StyledNavLink>
        <Ul>
          <Li>
            <StyledNavLink to="/">Accueil</StyledNavLink>
          </Li>
          <Li>
            <StyledNavLink to="/about">A propos</StyledNavLink>
          </Li>
        </Ul>
      </Nav>
    </>
  );
}
