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

// const fetchAPI = async (method, url, data = {}, headers = {}) => {
//   const response = await axios({
//     method,
//     url,
//     data,
//     headers,
//   }).catch(({ response }) => { 
//     console.log('data', response.data); 
//     console.log('status', response.status); 
//     console.log('code', response.code); 
//     console.log('header', response.headers); 
//     return { data: response.data.message, err: true };
//     }) 
//   console.log('response', response)
//   return response;
// }

// export default fetchAPI;
