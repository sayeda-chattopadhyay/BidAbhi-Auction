/**
 * This function selects logout buton, adds click event to the button.
 * Once clicking on the button a function will run that removes the token and profile details of the user from the local storage.
 * Then it redirects the users to the login page.
 */

export function setLogoutBUttonListener() {
  const logOutButton = document.getElementById("logOut");
  // console.log(logOutButton);

  if (logOutButton) {
    logOutButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to log out")) {
        localStorage.removeItem("profile");
        localStorage.removeItem("token");
        window.location.replace("/login.html");
      }
    });
  }
}
