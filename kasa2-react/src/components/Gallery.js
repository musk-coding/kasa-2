import React from "react";
import styled from "styled-components";
import Thumb from "./Thumb";

const Main = styled.main`
  background-color: var(--main-grey);
  margin-top: 25px;
  border-radius: 25px;
  padding: 56px 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: 50px 60px;
  grid-auto-rows: 340px;
  place-content: center;
  min-width: 400px;
`;

const mock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Gallery() {
  return (
    <Main>
      {mock.map((o) => (
        <Thumb />
      ))}
    </Main>
  );
}

export default Gallery;
