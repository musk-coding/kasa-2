import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components";

function Card() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();
  // const [rents, setRents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const rents = await (await getRents()).data["-Magcmd3knyXhPZ1CiDh"];
        setIsLoaded(true);
        // setRents(rents);
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
