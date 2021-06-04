import axios from "axios";

export const getRents = async () => {
  return await axios.get(
    "https://test-rest-api-a75b0-default-rtdb.europe-west1.firebasedatabase.app/db.json"
  );
};
