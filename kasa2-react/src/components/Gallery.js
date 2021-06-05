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
  grid-template-columns: repeat(auto-fit, 250px);
  grid-gap: 50px 60px;
  grid-auto-rows: 250px;
  place-content: center;
  min-width: 400px;
`;

function Gallery() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rents, setRents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rents = await (await getRents()).data["-Magcmd3knyXhPZ1CiDh"];
        setIsLoaded(true);
        setRents(rents);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error...</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
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
}

export default Gallery;
