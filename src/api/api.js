import axios from "axios";
const API_KEY = "AIzaSyAzkeyzKUvRXsBGOQQIfPfRKDp1xm2nK6E";

export async function register({ email, password }) {
  const res = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
  return res;
}

export async function logIn({ email, password }) {
  const res = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
  return res;
}
