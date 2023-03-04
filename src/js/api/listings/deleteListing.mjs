import { listingsBaseURL } from "../constants.mjs";

import { load } from "../../storage/index.mjs";

/**
 * Deletes a listing
 * @param {number} id Listings id
 * @returns {Boolean} returns true or throws error
 */

export async function removeListing(id = 0) {

  const method = "delete";

  if (!id) {
    throw new Error("You need to provide a listing Id to delete a listing");
  }

  const Url = `${listingsBaseURL}/${id}`;

  console.log(Url);

  const token = load("token");
  console.log(token);

  if (!token) {
    throw new Error("You must be logged in to delete a listing");
  }

  const response = await fetch(Url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: method,
  });

  if (response.ok) {
    return await response.json();
  }
  throw new Error("this listing can not be deleted");
}
