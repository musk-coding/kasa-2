import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 15px;
  background-color: #000;
  height: 210px;
  text-align: center;
  padding: 66px 0 29px 0;
  color: #fff;
`;

const footerImage = styled.img`
  height: 40px;
  margin-bottom: 30px;
`;

function Footer() {
  return (
    <StyledFooter>
      <footerImage src="svg/footer-logo.svg" alt="Footer logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </StyledFooter>
  );
}

export default Footer;
