import { profileURL } from "../constants.mjs";
import { load } from "../../storage/index.mjs";
import { createSingleProfileHTML } from "../../renderHtml/Profile/index.mjs";

const token = load("token");
const profile = load("profile");
const profileName = profile.name;
const getProfileUrl = `${profileURL}${profileName}`;
const qs = "?_listings=true";


/**
 * Gets a users profile data
 * @returns {Promise<Object>} with users profile data
 */

export async function getProfileDetails() {
  try {
    const bidListinsUrl = `${getProfileUrl}${qs}`;
    
    const response = await fetch(bidListinsUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const profile = await response.json();

    createSingleProfileHTML(profile);
  } catch (error) {
    console.log(error);
  }
}

getProfileDetails();
