import { createListing } from "../api/listings/createlisting.mjs";
import { displayAllListings } from "../templates/listings/displayalllistings.mjs";


/**
 * Create new listing
 * it takes listing data from form and sends to api.
 */


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

        alert("Your item has been added");
        window.location.replace("/profile.html");
      } catch (error) {
        console.log(error);
      }
    });
  }
}


