export const AUTH_URLS = {
  // emilys, emilyspass
  LOGIN: {
    endpoint: process.env.DUMMY_API_URL + "/auth/login",
    method: "POST",
  },
  GET_CURRENT_USER: {
    endpoint: process.env.DUMMY_API_URL + "/auth/me",
    method: "GET",
  },
  REFRESH_SESSION: {
    endpoint: process.env.DUMMY_API_URL + "/auth/refresh",
  },
};
