import axios from "axios";

const root = "http://localhost:7000/";

export const loginMe = async (credentials) => {
    return await axios.post(`${root}auth/login`, credentials);
  };