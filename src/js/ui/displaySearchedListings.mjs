import * as api from "../api/listings/index.mjs";
import * as templates from "../templates/index.mjs";

// search listing

export async function displaySearchedListings(tag) {
  try {
    // templates.displayLoading("postCardsLists");
    const listings = await api.searchListing(tag);
    templates.createAllListingsHTML(listings);
  } catch (error) {
    // templates.displayError("postCardsLists", error);
  }
}
