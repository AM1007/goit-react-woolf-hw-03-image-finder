import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '32013564-eb97bf6234748c3565a98072a';
const IMAGES_PER_PAGE = 12;

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: IMAGES_PER_PAGE,
  safe_search: true,
};

export const getImages = async (query, page) => {
  const config = {
    params: {
      q: query,
      page: page,
    },
  };
  const response = await axios.get('', config);
  return response.data;
};
