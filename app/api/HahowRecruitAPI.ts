import axios from 'axios';

const HahowRecruitAPI = axios.create({
  baseURL: 'https://hahow-recruit.herokuapp.com',
});

HahowRecruitAPI.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  return Promise.reject(error);
});

export default HahowRecruitAPI;
