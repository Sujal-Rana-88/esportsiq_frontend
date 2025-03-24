// const BASE_URL = 'https://rental-website-backend.onrender.com';
const BASE_URL = 'http://localhost:5000';



const API_URLS = {
  LOGIN: `${BASE_URL}/auth/login`,
  REGISTER: `${BASE_URL}/auth/register`,
  FORGOT_PASSWORD: `${BASE_URL}/auth/forgot-password`,
  RESET_PASSWORD: `${BASE_URL}/auth/reset-password`,
  VERIFY_EMAIL: `${BASE_URL}/auth/verify-email`,

};

export default API_URLS;