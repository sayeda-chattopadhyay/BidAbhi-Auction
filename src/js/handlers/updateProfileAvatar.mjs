import { updateProfileAvatar } from "../api/profiles/index.mjs";

export async function setUpdateProfileAvatar() {
  const form = document.querySelector("form#updateProfileAvatar");
  const input = document.querySelector("#floatingInput");
  console.log(input);
  console.log(form);
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profileAvatar = Object.fromEntries(formData.entries());
      console.log(profileAvatar);

      try {
        updateProfileAvatar(profileAvatar);
      } catch (error) {
        console.log(error);
      }
    });
  }
}

setUpdateProfileAvatar();
