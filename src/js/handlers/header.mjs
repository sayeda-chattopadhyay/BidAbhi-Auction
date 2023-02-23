import { load } from "../storage/index.mjs";

export function userLoggedIn() {
  const loginBtn = document.getElementById("loginBtn");
  const profileThumpnail = document.getElementById("profileThumpnail");
  const signBtn = document.getElementById("signBtn");
  console.log("profile:", profileThumpnail);
  const token = load("token");
  console.log(token);

  console.log(loginBtn);
  const logOut = document.getElementById("logOut");
  console.log(logOut);

  profileThumpnail.style.display = "none";
  signBtn.style.display = "block";

  loginBtn.style.display = "block";

  if (token) {
    console.log("loadToken", token);
    logOut.style.display = "block";
    profileThumpnail.style.display = "block";
    signBtn.style.display = "none";
    loginBtn.style.display = "none";
  } else {
    logOut.style.display = "none";
  }
}
