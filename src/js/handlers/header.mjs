import { load } from "../storage/index.mjs";



/**
 * Shows Log out, sign in and log out button
 * It shows profile and logout buttons if there is token
 */





export function userLoggedIn() {
  const loginBtn = document.getElementById("loginBtn");
  const profileThumbnail = document.getElementById("profileThumbnail");
  const signBtn = document.getElementById("signBtn");
  const token = load("token");

  const logOut = document.getElementById("logOut");


  profileThumbnail.style.display = "none";
  signBtn.style.display = "block";

  loginBtn.style.display = "block";

  if (token) {
    console.log("loadToken", token);
    logOut.style.display = "block";
    profileThumbnail.style.display = "block";
    signBtn.style.display = "none";
    loginBtn.style.display = "none";
  } else {
    logOut.style.display = "none";
  }
}


