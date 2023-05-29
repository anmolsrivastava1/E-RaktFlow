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
      url: `${BASE_URL}/users/resend-otp/${uuid}/?email=${email}`,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err.response?.data);
  }
};

/*------------------------------- BLOOD REQUEST -------------------------------*/

export const axiosMyRequestsGetRequest = async accessToken => {
  axios.defaults.headers.common = {Authorization: `Bearer ${accessToken}`};
  try {
    const res = await axios({
      method: 'get',
      url: `${BASE_URL}/blood/my-requests`,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err.response?.data);
  }
};

export const axiosRaiseBloodPostRequest = async (data, accessToken) => {
  // axios.defaults.headers.common['Authorization'] = accessToken;
  axios.defaults.headers.common = {Authorization: `Bearer ${accessToken}`};
  try {
    const res = await axios({
      method: 'post',
      url: `${BASE_URL}/blood/raise-request/`,
      data: data,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err.response?.data);
  }
};

export const axiosDonateBloodListGetRequest = async accessToken => {
  axios.defaults.headers.common = {Authorization: `Bearer ${accessToken}`};
  try {
    const res = await axios({
      method: 'get',
      url: `${BASE_URL}/blood/list-requests`,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err.response?.data);
  }
};

export const axiosPatientDetailGetRequest = async (accessToken, uuid) => {
  axios.defaults.headers.common = {Authorization: `Bearer ${accessToken}`};
  try {
    const res = await axios({
      method: 'get',
      url: `${BASE_URL}/blood/get-blood-request/${uuid}/`,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err.response?.data);
  }
};

/*------------------------------ OXYGEN REQUEST --------------------------------*/

export const axiosRaiseOxygenPostRequest = async (data, accessToken) => {
  // axios.defaults.headers.common['Authorization'] = accessToken;
  axios.defaults.headers.common = {Authorization: `Bearer ${accessToken}`};
  try {
    const res = await axios({
      method: 'post',
      url: `${BASE_URL}/blood/raise-request/oxygen/`,
      data: data,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err.response?.data);
  }
};

export const axiosProvideOxygenListGetRequest = async accessToken => {
  axios.defaults.headers.common = {Authorization: `Bearer ${accessToken}`};
  try {
    const res = await axios({
      method: 'get',
      url: `${BASE_URL}/blood/list-requests/oxygen/`,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err.response?.data);
  }
};

export const axiosPatientOxygenDetailGetRequest = async (accessToken, uuid) => {
  axios.defaults.headers.common = {Authorization: `Bearer ${accessToken}`};
  try {
    const res = await axios({
      method: 'get',
      url: `${BASE_URL}/blood/get-oxygen-request/oxygen/${uuid}/`,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err.response?.data);
  }
};
