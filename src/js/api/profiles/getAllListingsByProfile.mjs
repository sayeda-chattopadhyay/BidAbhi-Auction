import { profileURL } from "../constants.mjs";
import { load } from "../../storage/index.mjs";
import { createAllProfileListingsHTML } from "../../renderHtml/Profile/index.mjs";


const token = load("token");
const profile = load("profile");
const profileName = profile.name;
const listings = "/listings";
const url = `${profileURL}${profileName}${listings}`;

/**
 * Gets array of listings created by profile
 * @returns {Promise<array>} Response array of all listings objects the profile user created .
 */


export async function getAllListingsByProfile() {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await response.json();

    createAllProfileListingsHTML(json);

    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

getAllListingsByProfile();
