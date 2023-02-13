import { activeListingURL } from "../constants.mjs";
// console.log(activeListingURL);

import { load } from "../../storage/index.mjs";

/**
 * getAllListings() function fetching all the listings from server that users have created.

 */

export async function getAllListings() {
  const url = activeListingURL;
  // console.log(url);

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

  // const json = await response.json();
  // console.log(json);
}

// note- need to do try and catch block
