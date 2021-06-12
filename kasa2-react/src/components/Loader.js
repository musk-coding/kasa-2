import React from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 100px;
`;

const Loader = () => <StyledLoader>Loading...</StyledLoader>;

export default Loader;
