import { listingsBaseURL } from "../constants.mjs";

import { load } from "../../storage/index.mjs";

const querryString = document.location.search;

const params = new URLSearchParams(querryString);

const id = params.get("id");

const qs = "/bids";

/**
 * Place bid on listing
 * @param {Number} amount the bidding amount
 * @returns {Promise<Array>} Response array of listing objects.
 */



export async function createBidOnlisting(bidAmount) {
  const createBidUrl = `${listingsBaseURL}${"/"}${id}${qs}`;

  const token = load("token");

  let bidAmountObj = {
    amount: bidAmount,
  };

  // Send the bid Amount object to the API
  try {
    const response = await fetch(createBidUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify(bidAmountObj),
    });

    const json = await response.json();

    window.location.reload();
    return json;
  } catch (error) {
    console.log(error);
  }
}
