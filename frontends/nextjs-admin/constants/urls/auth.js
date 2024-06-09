export const EXTERNAL_API = "https://dummyjson.com";
export const AUTH_URLS = {
  // emilys, emilyspass
  LOGIN: {
    endpoint: EXTERNAL_API + "/auth/login",
    method: "POST",
  },
  GET_CURRENT_USER: {
    endpoint: EXTERNAL_API + "/auth/me",
    method: "GET",
  },
  REFRESH_SESSION: {
    endpoint: EXTERNAL_API + "/auth/refresh",
  },
};
