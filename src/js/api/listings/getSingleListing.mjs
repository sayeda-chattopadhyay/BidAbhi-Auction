import { singlelistingUrl } from "../constants.mjs";
import { load } from "../../storage/index.mjs";
//import { displaySingleListing } from "../../templates/listings/index.mjs";
import{createSingleListingHTML} from "../../renderHtml/Listing/singleListing.mjs"



/**
 * getPost(id) function fetches post from api server by its unique id. Retieves the data in object and passes to

 */

const querryString = document.location.search;

const params = new URLSearchParams(querryString);

const id = params.get("id");
// const name = params.get("name");
// console.log(name);


export async function getSingleListing(id) {
  if (!id) {
    throw new Error("require an id");
  }
  const getSingleListingUrl = `${singlelistingUrl}${id}`;

  console.log(getSingleListingUrl);

  const seller = "?_seller=true&_bids=true";

  const url = `${singlelistingUrl}${id}${seller}`;

  const token = load("token");

  console.log(token);
  console.log(getSingleListingUrl);

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  //   if (response.ok) {
  //     return await response.json();
  //   }

  const json = await response.json();
  console.log(json);
  //return json;

  // displaySingleListing(json)
  createSingleListingHTML(json)
}

getSingleListing(id);



//Note- add try and catch