import { profileURL } from "../constants.mjs";
import { load } from "../../storage/index.mjs";

const token = load("token");
const profile = load("profile");
const profileName = profile.name;
const getProfileUrl = `${profileURL}${profileName}`;
const qs = "/media";
const method = "put";

/**
 * Update profile avatar
 * @param {object url} profileAvatar  the bidding amount
 * @returns {Promise<object>} Response profile updated objects.
 */



export async function updateProfileAvatar(profileAvatar) {
  try {
    const profileAvatarUpdateUrl = `${getProfileUrl}${qs}`;
    console.log(profileAvatarUpdateUrl);

    const response = await fetch(profileAvatarUpdateUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: method,
      body: JSON.stringify(profileAvatar),
    });
    const Updatedprofile = await response.json();
    console.log(Updatedprofile);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}
