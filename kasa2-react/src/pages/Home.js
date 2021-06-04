import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      <Banner
        text="Chez vous, partout et ailleurs"
        imgUrl="img/shore_banner.png"
      />
      <Gallery />
    </>
  );
}
