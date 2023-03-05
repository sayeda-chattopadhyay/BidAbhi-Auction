import * as api from "../../api/listings/index.mjs";
import * as ui from "../../ui/index.mjs";

import { createAllListingsHTML } from "../../renderhtml/listing/alllistings.mjs";

export async function displaySearchedListings(tag) {
  try {
    ui.displayLoading("listingsContainer");
    const listings = await api.searchListing(tag);
    createAllListingsHTML(listings);
  } catch (error) {
    ui.displayError("listingsContainer", error);
  }
}
