// Auction base url

export const baseURL = "https://api.noroff.dev/api/v1/auction";

// Auction auth endpoints for register

export const authRegister = "/auth/register";
export const registerURL = `${baseURL}${authRegister}`;

// Auction auth endpoints for login

export const authLogin = "/auth/login";
export const loginURL = `${baseURL}${authLogin}`;

// Auction profiles endpoints

export const profile = "/profile";
export const profileURL = `${baseURL}${profile}`;

// Auction listings endpoints

export const listings = "/listings";
export const listingsURL = `${baseURL}${listings}`;
