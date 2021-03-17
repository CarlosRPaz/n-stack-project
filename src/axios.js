import axios from "axios";

const instance = axios.create({
    baseURL: " https://ow-api.com/v1/stats",
});

export default instance;