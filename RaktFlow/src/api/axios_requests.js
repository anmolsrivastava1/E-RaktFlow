import axios from 'axios';

const BASE_URL = 'http://18.234.65.22:2001';

/*------------------------- SIGN UP AND LOGIN IN REQUESTS ---------------------------*/

export const axiosSignupPostRequest = async data => {
  const res = await axios({
    method: 'post',
    url: `${BASE_URL}/users/signup/`,
    data: data,
  });
  return Promise.resolve(res);
};

export const axiosVerifyOtpPatchRequest = async (data, uuid) => {
  try {
    const res = await axios({
      method: 'patch',
      url: `${BASE_URL}/users/verify-otp/${uuid}/`,
      data: data,
    });
    console.log(uuid);
    return res;
  } catch (err) {
    return Promise.reject(err.response?.data);
  }
};

export const axiosLoginPostRequest = async ({emailValue, passwordValue}) => {
  try {
    console.log(emailValue, passwordValue);
    const res = await axios({
      method: 'post',
      url: `${BASE_URL}/users/login/`,
      data: {
        email: emailValue,
        password: passwordValue,
      },
    });

    console.log(res.data, 'logged in!!!!');
    return Promise.resolve(res);
  } catch (err) {
    console.log(err, 'ERROR - logging in!!!!');
    return Promise.reject(err.response?.data);
  }
};

export const axiosResendOtpGetRequest = async (uuid, email) => {
  try {
    const res = await axios({
      method: 'get',
      url: `${BASE_URL}users/resend-otp/${uuid}/?email=${email}`,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err.response?.data);
  }
};
