import { activeListingURL } from "../constants.mjs";
// console.log(activeListingURL);
import { load } from "../../storage/index.mjs";

/**
 * Get all active listings

 * @returns {Promise<Array>} Response array of all active listings objects.
 */


export async function getActiveListings() {

  const url = activeListingURL; 

  console.log("getActiveListings url :", url);

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

// note- need to do try and catch block

