import axios from 'axios';

const API_KEY = '3af6c4f2b6db4ec5822370bb8d38ffe4';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchHeadlines = async (country = 'us') => {
    try {
        const response = await axios.get(`${BASE_URL}/top-headlines`, {  // Corrected here
            params: {
                country,
                apiKey: API_KEY
            }
        });

        if (response.data && response.data.articles) {
            return response.data.articles;
        } else {
            console.error("No articles found in the response");
            return [];
        }
    } catch (error) {
        console.error("Error fetching headlines:", error);
        return [];
    }
};
