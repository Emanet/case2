import axios from 'axios';

const apiManager = axios.create({
    baseURL: 'https://api.artic.edu/api/v1/artworks',
})

const endpoints =  {
    getArtworks: (currentPage, limit = 10) => apiManager.get(`?page=${currentPage}&limit=${limit}`),
    searchArtwork: (searchTerm, page = 1, limit = 10) => apiManager.get(`search?q=${searchTerm}&page=${page}&limit=${limit}`)
}

export default endpoints;

