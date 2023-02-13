// import { searchListing } from "../api/listings/searchListing.mjs";
import * as ui from "../ui/index.mjs";

export function setSearchListingListener() {
  const form = document.querySelector("form#searchListing");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const tag = formData.get("tag");
      console.log("tag:", tag);
      ui.displaySearchedListings(tag);
    });
  }
}
