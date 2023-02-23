import { login } from "../api/auth/login.mjs";

// import { displayError } from "../ui/displayErrorMessage.mjs";

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");
  // const errorMessage = document.getElementById("errorMessage");


  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      console.log(profile);

      try {
        // send it to Api
        await login(profile);
        // window.location.replace("/index.html");
      } catch (error) {
        console.log("error:", error);
        // displayError("errorMessage", error);
      }
    });
  }
}
