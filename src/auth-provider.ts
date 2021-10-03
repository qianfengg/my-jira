import { User } from "./screens/project-list/search-panel";

const domain = process.env.REACT_APP_API_URL;

export const localStorageKey = `__auth_provider_token__`;

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = (data: { username: string; password: string }) => {
  fetch(`${domain}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      const result = await response.json();
      return handleUserResponse(result);
    }
  });
};

export const register = (data: { username: string; password: string }) => {
  fetch(`${domain}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      const result = await response.json();
      return handleUserResponse(result);
    }
  });
};

export const logout = () => window.localStorage.removeItem(localStorageKey);
