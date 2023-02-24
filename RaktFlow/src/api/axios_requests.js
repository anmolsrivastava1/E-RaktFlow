import axios from 'axios';

export const axiosPostRequest = async data => {
  const res = await axios({
    method: 'post',
    url: 'http://54.144.84.249:2001/users/signup/',
    data: data,
  });
  return res;
};
