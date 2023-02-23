import * as listings from "../templates/listings/index.mjs";

export function setSearchListingListener() {
  const form = document.querySelector("form#searchListing");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const tag = formData.get("tag");
      console.log("tag:", tag);

      // below function takes tag, sends it to api, fetch listings and display html

      listings.displaySearchedListings(tag);
    });
  }
}
