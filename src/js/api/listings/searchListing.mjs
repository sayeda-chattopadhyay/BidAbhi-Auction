import { searchListingUrl } from "../constants.mjs";

import { load } from "../../storage/index.mjs";

export async function searchListing(tag) {
  const url = `${searchListingUrl}${tag}`;
  console.log(url);

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
