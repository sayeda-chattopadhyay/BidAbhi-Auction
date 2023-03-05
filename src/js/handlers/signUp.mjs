import { register } from "../api/auth/signup.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  console.log("form:", form)

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      console.log(profile);

      try {
        // send it to Api
        await register(profile);
      } catch (error) {
        console.log("error:", error);
      }
    });
  }
}

setRegisterFormListener()