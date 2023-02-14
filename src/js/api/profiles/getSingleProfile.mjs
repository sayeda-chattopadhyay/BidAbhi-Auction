import { profileURL } from "../constants.mjs";
import { load } from "../../storage/index.mjs";
import { createSingleProfileHTML } from "../../templates/index.mjs";

const token = load("token");
console.log(token);

const profile = load("profile");
console.log(profile);

const profileName = profile.name;
console.log(profileName);

const getProfileUrl = `${profileURL}${profileName}`;
console.log(getProfileUrl);

const qs = "?_listings=true";

export async function getProfileDetails() {
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

    const profile = await response.json();

    createSingleProfileHTML(profile);
  } catch (error) {
    console.log(error);
  }
}

getProfileDetails();
