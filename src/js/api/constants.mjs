// Auction base url

export const baseURL = "https://api.noroff.dev/api/v1/auction";

// Auction auth endpoints for register

export const authRegister = "/auth/register";
export const registerURL = `${baseURL}${authRegister}`;

// Auction auth endpoints for login

export const authLogin = "/auth/login";
export const loginURL = `${baseURL}${authLogin}`;

// Auction profiles endpoints

export const profile = "/profiles";
export const profileURL = `${baseURL}${profile}${"/"}`;


// Auction All listings endpoints

export const listings = "/listings";
export const listingsBaseURL = `${baseURL}${listings}`;


// Auction Active listings endpoints

export const activeListing = "?_active=true";
export const activeListingURL = `${listingsBaseURL}${activeListing}`;

// filter active listings by tag using the _tag query flag.

export const searchListingQs = "&_tag=";
export const searchListingUrl = `${activeListingURL}${searchListingQs}`;

// The listings can be sorted with the sort flags:

export const listingSorts = "?sort=created&sortOrder=desc";
export const listingSortsURL = `${listingsBaseURL}${activeListing}`;

export const singlelistingUrl = `${listingsBaseURL}${"/"}`;


export const endingSoonQs ="&sort=endsAt&sortOrder=asc"
export const endingSoonUrl = `${activeListingURL}${endingSoonQs}`
