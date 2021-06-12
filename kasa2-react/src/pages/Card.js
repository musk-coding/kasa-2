import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components";
import { getRentById } from "../services/rents.service";

function Card() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rent, setRent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rent = await getRentById(id);
        setRent(rent);
        setIsLoaded(true);
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
    return <Loader />;
  } else {
    return <>CARD {id}</>;
  }
}

export default Card;
