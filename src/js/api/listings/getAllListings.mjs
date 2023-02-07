import { activeListingURL } from "../constants.mjs";

import { load } from "../../storage/index.mjs";

/**
 * getAllListings() function fetching all the listings from server that users have created.

 */

export async function getAllListings() {
  const url = activeListingURL;

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
