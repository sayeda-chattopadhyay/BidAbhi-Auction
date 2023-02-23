import { loginURL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";
import { displayError } from "../../ui/displayErrorMessage.mjs";

const method = "post";

export async function login(profile) {
  try {
    const errorMessage = document.getElementById("errorMessage");
    console.log(errorMessage);
    const url = loginURL;

    const userToLoginObject = {
      headers: {
        "content-Type": "application/json",
      },
      method,
      body: JSON.stringify(profile),
    };

    const response = await fetch(url, userToLoginObject);

    if (response.ok) {
      const { accessToken, ...profileDetails } = await response.json(); //  destructuring(for storing profile and access token separately)

      storage.save("token", accessToken);

      storage.save("profile", profileDetails);

      alert("You are now logged in");
      window.location.replace("/index.html");
    } else {
      throw new Error("Incorrect username or password");
    }
  } catch (error) {
    console.log(error);
    displayError("errorMessage", error);
  }
}
