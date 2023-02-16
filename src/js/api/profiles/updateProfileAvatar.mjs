import { profileURL } from "../constants.mjs";
import { load } from "../../storage/index.mjs";

const token = load("token");
console.log(token);

const profile = load("profile");
console.log(profile);

const profileName = profile.name;
console.log(profileName);

const getProfileUrl = `${profileURL}${profileName}`;
console.log(getProfileUrl);

const qs = "/media";

const method = "put";

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
    // if (response.ok) {
    //   return await response.json();

    // }
    const Updatedprofile = await response.json();
    console.log(Updatedprofile);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}
