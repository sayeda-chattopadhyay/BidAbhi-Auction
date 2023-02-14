import { profileURL } from "../constants.mjs";

import { load } from "../../storage/index.mjs";
import { createAllProfileListingsHTML } from "../../templates/index.mjs";

console.log(profileURL);

const token = load("token");
console.log(token);

const profile = load("profile");
console.log(profile);

const profileName = profile.name;
console.log(profileName);

const listings = "/listings";
const url = `${profileURL}${profileName}${listings}`;
console.log(url);

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

