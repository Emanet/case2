import axios from "axios"

const client = axios.create({
        baseURL: `https://api.artic.edu/api/v1/artworks`,
});

export default client;