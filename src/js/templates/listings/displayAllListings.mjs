import * as api from "../../api/listings/index.mjs";
import * as templates from "../../renderhtml/listing/index.mjs";
import * as ui from "../../ui/index.mjs";

export async function displayAllListings() {
  try {
    ui.displayLoading("listingsContainer"); //  Loading indication to the html listing container
    const listings = await api.getAllListings(); // getting all listings from api
    templates.createAllListingsHTML(listings); // passing these listings to HTML page
  } catch (error) {
    console.log(error);
    ui.displayError("listingsContainer", error); // displays error message
  }
}
