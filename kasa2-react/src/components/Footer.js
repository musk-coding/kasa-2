import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 15px;
  background-color: #000;
  height: 200px;
  text-align: center;
  padding: 66px 0 29px 0;
  color: #fff;
`;

const FooterImage = styled.img.attrs({
  src: "svg/footer-logo.svg",
  alt: "Footer logo",
})`
  height: 40px;
  margin-bottom: 30px;
`;

// const P = styled.p`
//   font-size: 24px;
// `;

function Footer() {
  return (
    <StyledFooter>
      <FooterImage />
      <p>© 2020 Kasa. All rights reserved</p>
    </StyledFooter>
  );
}

export default Footer;
