const axios = require('axios');

const fetchAPI = async (method, url, data = {}, headers = {}) => {
  const response = await axios({
    method,
    url,
    data,
    headers,
  });

  return response;
}

export default fetchAPI;
