import axios from 'axios';

const BASE_URL = 'http://54.144.84.249:2001/';

export const axiosPostRequest = async data => {
  const res = await axios({
    method: 'post',
    url: 'http://54.144.84.249:2001/users/signup/',
    data: data,
  });
  return Promise.resolve(res);;
};

export const axiosOtpPostRequest = async (data, uuid) => {
  try {
    const res = await axios({
      method: 'patch',
      url: `http://54.144.84.249:2001/users/verify-otp/${uuid}/`,
      data: data,
    });
    console.log(uuid);
    console.log('----');
    return res;
  }
  catch (err) {
    // console.log(Promise.reject(err.response.data));
    return Promise.reject(err.response?.data);
  }

};

export const LoginRequest = async ({ emailValue, passwordValue }) => {
  try {
    console.log(emailValue, passwordValue);
    const res = await axios.post(`http://54.144.84.249:2001/users/login/`, {
      "email": emailValue,
      "password": passwordValue
    });

    console.log(res.data, "aaaaa");
    return Promise.resolve(res);
  } catch (err) {
    console.log(err, "bbbbb");

    return Promise.reject(err.response?.data);
  }
};


export const ResendOtp = async (uuid, email) => {
  try {
    const res = await axios.get(`${BASE_URL}users/resend-otp/${uuid}/?email=${email}`);

    return Promise.resolve(res);

  }
  catch (err) {
    return Promise.reject(err.response?.data);
  }

}