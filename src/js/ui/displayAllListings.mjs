import * as api from "../api/listings/index.mjs";
// import * as templates from "../templates/index.mjs";
// import * as handler from "../handlers/index.mjs";
import * as templates from "../templates/allListings.mjs";

export async function displayAllListings() {
  try {
    // templates.displayLoading("postCardsLists"); // ui.displayLoading("postCardsLists"); Loading indication to the html Post container
    const listings = await api.getAllListings(); // getting all listings from api
    templates.createAllListingsHTML(listings); // passing these listings to HTML
  } catch (error) {
    console.log(error);
    // templates.displayError("postCardsLists", error); // ui.displayError("postCardsLists", error) displays error message
  }
}

// search listing

// export async function displaySearchedListings(tag) {
//   try {
//     // templates.displayLoading("postCardsLists");
//     const listings = await api.searchListing(tag);
//     templates.createAllListingsHTML(listings);
//   } catch (error) {
//     // templates.displayError("postCardsLists", error);
//   }
// }
displayAllListings();
