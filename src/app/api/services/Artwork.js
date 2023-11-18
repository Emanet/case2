import client from "../axios";

const FetchArtwork = async ({ currentPage }) => {
    try {
        const response = await client.get(`?page=${currentPage}&limit=10`);
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        return null;
    }
}
const FetchArtworkDetails = async ({ id }) => {
    try {
        const response = await client.get(`${id}`);
        return response.data;
    } catch (error) {
        console.log('Error:', error);
        return null;
    }
};
export { FetchArtwork, FetchArtworkDetails };