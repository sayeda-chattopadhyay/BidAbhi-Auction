import { loginURL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";
const method = "post";

export async function login(profile) {
  try {
    const url = loginURL;

    const userToLoginObject = {
      headers: {
        "content-Type": "application/json",
      },
      method,
      body: JSON.stringify(profile),
    };

    const response = await fetch(url, userToLoginObject);
    console.log(response);

    // const result = await response.json();
    // console.log(result);

    // localStorage.setItem("token", result.accessToken);

    if (response.ok) {
      const { accessToken, ...profileDetails } = await response.json(); //  destructuring(for storing profile and access token separately)

      storage.save("token", accessToken);

      storage.save("profile", profileDetails);

      alert("You are now logged in");
    } else {
      throw new Error("Incorrect username or password");
    }
  } catch (error) {
    console.log(error);
  }
}
