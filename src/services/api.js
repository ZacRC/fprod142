import axios from 'axios';

const API_BASE_URL = 'http://your-django-backend-url.com/api';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Add more API functions as needed
