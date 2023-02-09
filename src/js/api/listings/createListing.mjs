import { listingsBaseURL } from "../constants.mjs";

console.log(listingsBaseURL);

import { load } from "../../storage/index.mjs";

// console.log(load);

// const method = "post";

// const token = load("token");
// console.log(token);

export async function createListing(listingData) {
    
  const createListingUrl = listingsBaseURL;

  const token = load("token");

  const response = await fetch(createListingUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },

    method: "POST",
    body: JSON.stringify(listingData),
  });

  console.log(response);

  const json = await response.json();
  console.log(json);
}
