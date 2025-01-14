import axios from 'axios';

const BASE_URL = ''; // Base URL for the API

// Create a new Axios instance with common configuration
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // Timeout after 5 seconds
});

// API call to get anime info by id
export const getAnimeInfo = async (animeId) => {
  try {
    const response = await api.get(`/anime/zoro/info?id=${animeId}`);
    return response.data; // Return the response data if successful
  } catch (error) {
    console.error('Error fetching anime info:', error);
    throw error; // Propagate the error
  }
};

// API call to search for anime based on a query
export const searchAnime = async (query) => {
  try {
    const response = await api.get(`/anime/zoro/search?query=${query}`);
    return response.data; // Return the response data if successful
  } catch (error) {
    console.error('Error searching anime:', error);
    throw error; // Propagate the error
  }
};

// API call to get anime recommendations
export const getRecommendations = async () => {
  try {
    const response = await api.get('/anime/zoro/recommendations');
    return response.data; // Return the recommendations data if successful
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    throw error; // Propagate the error
  }
};
