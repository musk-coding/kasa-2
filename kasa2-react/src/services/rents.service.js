import axios from "axios";
import DB from "../mock/db.json";

export const getRents = async () => {
  return await axios.get(
    "https://test-rest-api-a75b0-default-rtdb.europe-west1.firebasedatabase.app/db.json"
  );
};

export const getRentById = async (id) => {
  // return await axios.get(
  //   `https://test-rest-api-a75b0-default-rtdb.europe-west1.firebasedatabase.app/db.json/${id}`
  // );
  return DB.find((rent) => rent.id === id);
};
