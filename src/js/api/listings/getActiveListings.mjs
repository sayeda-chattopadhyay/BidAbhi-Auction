import { activeListingURL } from "../constants.mjs";
console.log(activeListingURL);
import { load } from "../../storage/index.mjs";

/**
 * getActiveListings() function fetching all the active listings from server that users have created.

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

//  const listings = await response.json();
//  console.log("listings", listings)

  if (response.ok) {
    return await response.json();
    
  }

  throw new Error("Fetching listing failed");
}

// note- need to do try and catch block

