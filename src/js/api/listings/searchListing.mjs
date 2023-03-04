
import {activeListingURL} from "../constants.mjs"

import { load } from "../../storage/index.mjs";

// get all posts that matching with the tag
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


