//import { activeListingURL } from "../constants.mjs";
//console.log(activeListingURL);

import { endingSoonUrl } from "../constants.mjs";


import { load } from "../../storage/index.mjs";

/**
 * Get all ending soon listings up to 15
 * @returns {Promise<Array>} Response array of all active listings objects.
 */

export async function getAllListings() {
  const sellerQs = "&_seller=true&_bids=true"
  const limitQs ="&limit=15"
 
  const url = `${endingSoonUrl}${sellerQs}${limitQs}`;


  const token = load("token");

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    return await response.json();
 
  }

  throw new Error("Fetching listing failed");
}


