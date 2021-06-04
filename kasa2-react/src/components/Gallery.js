import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getRents } from "../services/data.service";
import Thumb from "./Thumb";

const Main = styled.main`
  background-color: var(--main-grey);
  margin-top: 25px;
  border-radius: 25px;
  padding: 56px 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 50px 60px;
  grid-auto-rows: 200px;
  place-content: center;
  min-width: 400px;
`;

function Gallery() {
  const [rents, setRents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const rents = await (await getRents()).data["-Magcmd3knyXhPZ1CiDh"];
      setRents(rents);
    };
    fetchData();
  }, []);

  return (
    <Main>
      {rents.map((rent, index) => (
        <Link to={`/card/${rent.id}`} key={index}>
          <Thumb title={rent.title} imgUrl={rent.cover} />
        </Link>
      ))}
    </Main>
  );
}

export default Gallery;
