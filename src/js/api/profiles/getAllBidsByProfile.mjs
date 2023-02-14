import { profileURL } from "../constants.mjs";
import { load } from "../../storage/index.mjs";
import { createAllBidsByProfileHTML } from "../../templates/index.mjs";

const token = load("token");
console.log(token);

const profile = load("profile");
console.log(profile);

const profileName = profile.name;
console.log(profileName);

const getProfileUrl = `${profileURL}${profileName}`;
console.log(getProfileUrl);

const qs = "/bids?_listings=true";

export async function getAllBidsByProfile() {
  try {
    const bidListinsUrl = `${getProfileUrl}${qs}`;
    console.log(bidListinsUrl);

    const response = await fetch(bidListinsUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    //   if (response.ok) {
    //     return await response.json();
    //   }

    const bids = await response.json();
    console.log(bids);
    createAllBidsByProfileHTML(bids);
  } catch (error) {
    console.log(error);
  }
}

getAllBidsByProfile();
