//import { activeListingURL } from "../constants.mjs";
//console.log(activeListingURL);

import { endingSoonUrl } from "../constants.mjs";


import { load } from "../../storage/index.mjs";

/**
 * getAllListings() function fetching all the listings from server that users have created.

 */

export async function getAllListings() {
  const sellerQs = "&_seller=true&_bids=true"
  const limitQs ="&limit=15"
  //const url = activeListingURL; 
  const url = `${endingSoonUrl}${sellerQs}${limitQs}`;
  console.log("getAllListings url :", url);

  const token = load("token");

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    return await response.json();
    // const results = await response.json();
    // console.log("results", results)
  }

  throw new Error("Fetching listing failed");
}

// note- need to do try and catch block
