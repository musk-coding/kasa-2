import React, { useState } from "react";
import styled from "styled-components";

<div class="accordion">
  <div class="accordion--header">
    <h3>Équipements</h3>
    <img src="svg/arrow_up.svg" alt="Back arrow" class="accordion--arrow" />
  </div>
  <div class="accordion--content">
    <ul>
      <li>Climatisation</li>
      <li>Wi-Fi</li>
      <li>Cuisine</li>
      <li>Espace de travail</li>
      <li>Fer à repasser</li>
      <li>Sèche-cheveux</li>
      <li>Cintres</li>
    </ul>
  </div>
</div>;

const AccordionPanel = styled.div`
  position: relative;
  font-family: "Montserrat", sans-serif;
  width: 80%;
  margin: 0 auto;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.12rem;
  height: 52px;
  border-radius: 10px;
  background-color: var(--main-red);
  padding: 13px 20px;
  color: #fff;
  cursor: pointer;
  margin-top: 15px;
`;

const AccordionContent = styled.div`
  position: relative;
  top: -15px;
  z-index: -1;
  background-color: var(--main-grey);
  padding: 40px 12px 27px 20px;
  border-radius: 10px;
  color: var(--main-red);
  font-size: 1.12rem;
  line-height: 34px;
`;

// const Ul = styled.ul`
//   list-style-type: none;
//   line-height: 25px;
// `;

function Accordion({ title, text }) {
  const [open, setOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState("svg/arrow_up.svg");

  const Toggler = styled.img.attrs({
    src: `${imgUrl}`,
    alt: "Accordion toggler",
  })``;

  const toggle = () => {
    setOpen((open) => !open);
    setImgUrl(open ? "svg/arrow_up.svg" : "svg/arrow_down.svg");
  };

  return (
    <AccordionPanel>
      <AccordionHeader onClick={toggle}>
        <h3>{title}</h3>
        <Toggler />
      </AccordionHeader>
      {open && (
        <AccordionContent>
          {text}
          {/* <Ul>
            <li>Climatisation</li>
            <li>Wi-Fi</li>
            <li>Cuisine</li>
            <li>Espace de travail</li>
            <li>Fer à repasser</li>
            <li>Sèche-cheveux</li>
            <li>Cintres</li>
          </Ul> */}
        </AccordionContent>
      )}
    </AccordionPanel>
  );
}

export default Accordion;

// .accordion {
//     position: relative;
//     width: 582px;
//     font-family: "Montserrat", sans-serif;
//   }

//   .accordion--header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     font-size: 1.12rem;
//     height: 52px;
//     border-radius: 10px;
//     background-color: var(--main-red);
//     padding: 13px 20px;
//     color: #fff;
//   }

//   .accordion--content {
//     position: relative;
//     top: -15px;
//     z-index: -1;
//     background-color: var(--main-grey);
//     padding: 40px 12px 27px 20px;
//     border-radius: 10px;
//     color: var(--main-red);
//     font-size: 1.12rem;
//   }

//   .accordion--content ul {
//     list-style-type: none;
//     line-height: 25px;
//   }

//   /* .accordion--content li + li {
//     margin-top: 10px;
//   } */

//   .accordion--arrow {
//     cursor: pointer;
//   }
