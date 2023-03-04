
import {activeListingURL} from "../constants.mjs"
import { load } from "../../storage/index.mjs";

/**
 * Get a listings
 * @param {string} tag the listing id
 * @returns {Promise<Array>} Response array of listing objects with the matching tag param.
 */



export async function searchListing(tag) {

  const qS = "&_seller=true&_tag="

 const url = `${activeListingURL}${qS}${tag}`;

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

  throw new Error("searching listing failed");
}


