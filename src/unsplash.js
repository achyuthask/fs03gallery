import axios from 'axios';

const API_KEY = 'IdWIxoIkmBv7yVTLK-CrDauCL95mCLwoq7sT6HMBu_c';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${API_KEY}`
  }
});

export const getPhotos = async () => {
  try {
    const response = await unsplash.get('/photos');
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
};
