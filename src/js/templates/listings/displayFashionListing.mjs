import * as api from "../../api/listings/index.mjs";
import * as renderhtml from "../../renderhtml/listing/index.mjs";
import * as ui from "../../ui/index.mjs";

export async function displayFashionListings() {
  try {
    //ui.displayLoading("fashionListingsContainer"); //  Loading indication to the html listing container
    const listings = await api.getFashionlistings(); // getting all listings from api
    renderhtml.createFashionListingsHtml(listings); // passing these listings to HTML page
  } catch (error) {
    console.log(error);
    ui.displayError("fashionListingsContainer", error); // displays error message
  }
}
