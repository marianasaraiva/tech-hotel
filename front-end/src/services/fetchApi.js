const axios = require('axios');

const fetchAPI = async (method, url, data) => {
  const response = await axios({
    method,
    url,
    data,
  });

  return response;
}

export default fetchAPI;
