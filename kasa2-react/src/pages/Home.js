import React from "react";
import { Banner, Gallery } from "../components";

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
