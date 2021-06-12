import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Colors from "../shared/constants";

const NotFoundDiv = styled.div`
  text-align: center;
  margin-top: 50px;
  color: ${Colors.RED};
`;

const H1 = styled.h1`
  font-size: 288px;
  font-weight: 700px;
  margin-bottom: 66px;
`;

const P = styled.p`
  font-size: 36px;
  font-weight: 500px;
  margin-bottom: 182px;
`;

const A = styled.a`
  font-size: 18px;
  font-weight: 500px;
`;

const NotFound = () => (
  <NotFoundDiv>
    <H1>404</H1>
    <P>Oups! La page que vous demandez n'existe pas.</P>
    <NavLink
      to="/"
      style={{ color: Colors.RED, fontSize: "18px", fontWeight: "500px" }}
    >
      Retourner sur la page d’accueil
    </NavLink>
  </NotFoundDiv>
);

export default NotFound;

{
  /*
   <div class="not-found">
<h1>404</h1>
<p>Oups! La page que vous demandez n'existe pas.</p>
<a href="home.html">Retourner sur la page d’accueil</a>
</div> 
*/
}

// .not-found {
//     text-align: center;
//     margin-top: 50px;
//     color: var(--main-red);
//   }

//   .not-found h1 {
//     font-size: 288px;
//     font-weight: 700px;
//     margin-bottom: 66px;
//   }

//   .not-found p {
//     font-size: 36px;
//     font-weight: 500px;
//     margin-bottom: 182px;
//   }

//   .not-found a {
//     font-size: 18px;
//     font-weight: 500px;
//     color: var(--main-red);
//   }
