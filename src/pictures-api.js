import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com/'

export const fetchImg = async (searchQuery, currentPage) => {
    const response = await axios.get('photos/', {
        params: {
            client_id: "eVhb8v0RIGbiD5NG5gL0VhsC7iWkb5wDX - _meFjojB0",
            query: searchQuery,
            page: currentPage,
        }
    })
    return response.data.hits;
}