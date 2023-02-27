import * as api from "../../api/listings/index.mjs";
import * as renderHTml from "../../renderHtml/Listing/index.mjs";
import * as ui from "../../ui/index.mjs";

export async function displayActiveListings() {
  try {
    // ui.displayLoading("activeListingsContainer"); //  Loading indication to the html listing container
    const listings = await api.getActiveListings() // getting all listings from api
    renderHTml.createActiveListingsHtml(listings); // passing these listings to HTML page
  } catch (error) {
    console.log(error);
    ui.displayError("activeListingsContainer", error); // displays error message
  }
}
