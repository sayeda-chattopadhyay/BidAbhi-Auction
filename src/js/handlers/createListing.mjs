import { createListing } from "../api/listings/createListing.mjs";
import { displayAllListings } from "../../js/ui/displayAllListings.mjs";

export function setCreateListingListener() {
  const form = document.querySelector("#createListing");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const listingData = Object.fromEntries(formData.entries());

      console.log("listing", listingData);

      if (!listingData.tags.trim()) {
        delete listingData.tags;
      } else {
        listingData.tags = listingData.tags.split(",");
      }

      if (!listingData.media.trim()) {
        delete listingData.media;
      } else {
        listingData.media = listingData.media.split(",");
      }

      // Send it to the API
      try {
        await createListing(listingData);

        // Deiplay all listings

        displayAllListings();
        alert("Your listing is created");
        window.location.replace("/profile.html");
      } catch (error) {
        console.log(error);
      }
    });
  }
}

// setCreateListingListener();
