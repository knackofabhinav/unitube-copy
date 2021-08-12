import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
export const instance = axios.create({
  baseURL: "http://localhost:3000/",
  //   headers: {
  //     Authorization: user?.authToken,
  //   },
});

// export const instance = () => {
//   return axios.create({
//     baseURL: "http://localhost:3000",
//     // headers: {
//     //   "Content-Type": "application/json",
//     //   Accept: "application/json",
//     //   Authorization: user?.authToken,
//     // },
//   });
// };

// // Set the AUTH token for any request
// instance.interceptors.request.use(function (config) {
//   const token = JSON.parse(localStorage.getItem("user")).authToken;
//   config.headers.Authorization = token ? `Bearer ${token}` : "";
//   return config;
// });
// let instance = axios.create({
//   baseURL: "http://localhost:3000/",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
// Authorization: user && user?.authToken,
//     transformRequest: [function (data, headers) {
//     headers['Authorization'] = auth()
//     return JSON.stringify(data)
//   }],
//     Authorization: {
//       toString() {
//         return `Bearer ${user.authToken}`;
//       },
//     },
//   },
//   headers: {
//   },
// });

// export const changeAPIHeader = () => {
//   instance = axios.create({
//     baseURL: "http://localhost:3000/",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: JSON.parse(localStorage.getItem("user"))?.authToken,
//     },
//   });
// };

// export { instance };
