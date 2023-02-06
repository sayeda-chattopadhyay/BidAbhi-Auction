import { listingsURL } from "../constants.mjs";

import { load } from "../../storage/index.mjs";

/**
 * getAllListings() function fetching all the listings from server that users have created.

 */

export async function getAllListings() {
  const url = listingsURL;

  const token = load("token");

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const listings = response.json();
  console.log(listings);
}
