import { load } from "../storage/index.mjs";

export function userLoggedIn() {
  const loginBtn = document.getElementById("loginBtn");
  const profileThumbnail = document.getElementById("profileThumbnail");
  const signBtn = document.getElementById("signBtn");
  console.log("profile:", profileThumbnail);
  const token = load("token");
  console.log(token);

  console.log(loginBtn);
  const logOut = document.getElementById("logOut");
  console.log(logOut);

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
