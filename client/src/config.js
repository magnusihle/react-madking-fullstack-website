import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://react-madking-shop.herokuapp.com/",
})