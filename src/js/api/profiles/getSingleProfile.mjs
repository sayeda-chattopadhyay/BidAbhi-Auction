import { profileURL } from "../constants.mjs";
import { load } from "../../storage/index.mjs";
import { createSingleProfileHTML } from "../../renderHtml/Profile/index.mjs";

const token = load("token");


const profile = load("profile");


const profileName = profile.name;


const getProfileUrl = `${profileURL}${profileName}`;


const qs = "?_listings=true";

//const qs = "/bids?_listings=true";
// const qs = "/bids?_listings=true";

export async function getProfileDetails() {
  try {
    const bidListinsUrl = `${getProfileUrl}${qs}`;
    

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
