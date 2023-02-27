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
// console.log(profileURL);

// Auction All listings endpoints

export const listings = "/listings";
export const listingsBaseURL = `${baseURL}${listings}`;
// console.log(listingsBaseURL);

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
// console.log(singlelistingUrl);


//const endsAt_url = https://nf-api.onrender.com/api/v1/auction/listings?_active=true&sort=endsAt&sortOrder=asc&limit=18;

export const endingSoonQs ="&sort=endsAt&sortOrder=asc"

export const endingSoonUrl = `${activeListingURL}${endingSoonQs}`
// console.log("endingSoonUrl :", endingSoonUrl)