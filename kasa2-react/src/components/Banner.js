import React from "react";
import styled from "styled-components";

function Banner({ text, imgUrl }) {
  const StyledBanner = styled.div`
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0.3) 100%
      ),
      url(${imgUrl});
    background-size: cover;
    background-position: center;
    margin-top: 30px;
    width: 100%;
    height: 223px;
    border-radius: 25px;
    color: #fff;
    display: grid;
    place-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0 16px;
  `;

  return (
    <StyledBanner>
      <h1>{text && text}</h1>
    </StyledBanner>
  );
}

export default Banner;
