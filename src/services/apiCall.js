import axios from "axios";

const root = "http://localhost:7000/";

export const loginMe = async (credentials) => {
    return await axios.post(`${root}auth/login`, credentials);
  };

  export const registerMe = async (newCredentials) => {
    return await axios.post(`${root}auth/register`, newCredentials);
  };
  
  export const getProfile = async (credentialCheck) => {
    return await axios.get(`${root}user/getProfile`, {
      headers: {
        authorization: "Bearer " + credentialCheck,
      },
    });
  };
