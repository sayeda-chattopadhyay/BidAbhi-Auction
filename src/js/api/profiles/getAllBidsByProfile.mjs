import { profileURL } from "../constants.mjs";
import { load } from "../../storage/index.mjs";
import { createAllBidsByProfileHTML } from "../../renderHtml/Profile/index.mjs";

const token = load("token");
const profile = load("profile");
const profileName = profile.name;
const getProfileUrl = `${profileURL}${profileName}`;


const qs = "/bids?_listings=true";

/**
 * Gets all listings which the profile user bids on 
 * @returns {Promise<Array>} Response array of all listings objects the profile user bids on .
 */



export async function getAllBidsByProfile() {
  try {
    const bidListinsUrl = `${getProfileUrl}${qs}`;

    const response = await fetch(bidListinsUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const bids = await response.json();
    console.log(bids);
    createAllBidsByProfileHTML(bids);
  } catch (error) {
    console.log(error);
  }
}

getAllBidsByProfile();
