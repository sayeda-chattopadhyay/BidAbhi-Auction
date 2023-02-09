import * as api from "../api/listings/getSingleListing.mjs";
import * as templates from "../templates/index.mjs";
// import * as handler from "../handlers/index.mjs";

export async function displaySingleListing() {
  try {
    // templates.displayLoading("postCardsLists"); // ui.displayLoading("postCardsLists"); Loading indication to the html Post container
    const listing = await api.getSingleListing(); // getting all listings from api
    templates.createSingleListingHTML(listing); // passing these listings to HTML
  } catch (error) {
    console.log(error);
    // templates.displayError("postCardsLists", error); // ui.displayError("postCardsLists", error) displays error message
  }
}
