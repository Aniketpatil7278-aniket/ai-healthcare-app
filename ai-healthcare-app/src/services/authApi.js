import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/Aniketpatil7278-aniket/json-server-api/users";

export const loginUserApi = async (userData) => {
  const response = await axios.get(BASE_URL);

  const user = response.data.find(
    (item) => item.email.toLowerCase() === userData.email.toLowerCase(),
  );

  
  if (user && user.password === userData.password) {
    return user;
  }

  throw new Error("Invalid Email or Password");
};
