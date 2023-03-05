import { loginURL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";
import { displayError } from "../../ui/displayerrormessage.mjs";


/**
 * sends a post request to API to log in user. will redirect to home page if succesful
 * @param {Object} profile object containing  email and password
 * @param {string} profile.email users email
 * @param {string} profile.password users password

 */


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

    
      window.location.replace("/index.html");
    } else {
      throw new Error("Incorrect username or password");
    }
  } catch (error) {
    console.log(error);
    displayError("errorMessage", error);
  }
}
