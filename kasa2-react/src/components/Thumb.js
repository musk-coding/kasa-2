import React from "react";
import styled from "styled-components";

const H3 = styled.h3`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 0.8rem;
  width: 100px;
`;

function Thumb({ title, imgUrl }) {
  const StyledThumb = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background-image: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url(${imgUrl});
    background-size: cover;
    &:hover {
      background-image: url(${imgUrl});
      cursor: pointer;
    }
  `;

  return (
    <StyledThumb>
      <H3 className="thumb-title">{title}</H3>
    </StyledThumb>
  );
}

export default Thumb;
