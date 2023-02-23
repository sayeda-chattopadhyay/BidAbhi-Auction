import { registerURL } from "../constants.mjs";
const method = "post";

export async function register(profile) {
  try {
    const url = registerURL;

    const userToRegister = {
      headers: {
        "content-Type": "application/json",
      },
      method,
      body: JSON.stringify(profile),
    };

    const response = await fetch(url, userToRegister);
    console.log(response);

    const result = await response.json();
    console.log(result);

    alert("You are now registered");
    window.location.replace("/login.html");

    // return result;
  } catch (error) {
    console.log(error);
  }
}
