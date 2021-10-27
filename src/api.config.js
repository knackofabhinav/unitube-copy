import axios from "axios";

export const initialAPIConfig = () => {
  axios.defaults.baseURL = "https://unitube-server.herokuapp.com/";
  axios.defaults.headers.common["Authorization"] = JSON.parse(
    localStorage.getItem("user")
  )?.authToken;
};

export function setupAuthHeaders(token) {
  if (token) {
    return (axios.defaults.headers.common["Authorization"] = token);
  }
  delete axios.defaults.headers.common["Authorization"];
}
