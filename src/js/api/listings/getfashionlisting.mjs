
import {listingsBaseURL} from "../constants.mjs"

import { load } from "../../storage/index.mjs";


/**
 * Get all listings tag with fashions
 * @returns {Promise<Array>} Response array of all active listings objects.
 */

export async function getFashionlistings() {

  const qS = "?_tag=fashion"
 

 const url = `${listingsBaseURL}${qS}`;

 
  console.log("searchListing url:", url);

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



