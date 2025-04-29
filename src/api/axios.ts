import axios from "axios";

export const api = axios.create({
  baseURL: "https://urgent-2kay-directed-bill-payment-system.onrender.com/auth",
  //baseURL: "http://localhost:5000/auth",
  withCredentials: true,
});
