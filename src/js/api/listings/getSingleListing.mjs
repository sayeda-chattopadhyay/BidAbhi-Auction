import { singlelistingUrl } from "../constants.mjs";
import { load } from "../../storage/index.mjs";
import{createSingleListingHTML} from "../../renderhtml/listing/singlelisting.mjs"

const querryString = document.location.search;
const params = new URLSearchParams(querryString);
const id = params.get("id");

/**
 * Get a listings
 * @param {number} id the listing id
 * @returns {Promise<Array>} Response array of listing objects.
 */


export async function getSingleListing(id) {
  if (!id) {
    throw new Error("require an id");
  }
  const getSingleListingUrl = `${singlelistingUrl}${id}`;

  console.log(getSingleListingUrl);

  const seller = "?_seller=true&_bids=true";

  const url = `${singlelistingUrl}${id}${seller}`;

  const token = load("token");


  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

 

  const json = await response.json();
  console.log(json);
  //return json;

  createSingleListingHTML(json)
}

getSingleListing(id);

