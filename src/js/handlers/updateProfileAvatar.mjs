import { updateProfileAvatar } from "../api/profiles/updateprofileavatar.mjs";


/**
 * Update User profile avatar
 * it takes new media avatar url from form and send it to Api
 */




export async function setUpdateProfileAvatar() {
  const form = document.querySelector("form#updateProfileAvatar");
  // const input = document.querySelector("#floatingInput");
 

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profileAvatar = Object.fromEntries(formData.entries());
      
      try {
        updateProfileAvatar(profileAvatar);
      } catch (error) {
        console.log(error);
      }
    });
  }
}

setUpdateProfileAvatar();
