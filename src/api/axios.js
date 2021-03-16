import axios from 'axios';

const instance = axios.create({             // Creates an instance of the URL so we don't have to keep typing it out
    baseURL: "https://ow-api.com/v1/stats"
})

export default instance;