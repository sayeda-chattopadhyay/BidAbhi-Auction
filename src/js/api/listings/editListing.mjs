import { listingsBaseURL } from "../constants.mjs";
import { load } from "../../storage/index.mjs";

const querryString = document.location.search;
const params = new URLSearchParams(querryString);
const id = params.get("id");


/**
 * Every listing has a unique id. Get this id from url and create Api endpoint where updated data for a specific listing needs to be sent.
 * This Async function sends updated listing to the API endpoint.
 */


export async function editListing(listing) {

    const url = `${listingsBaseURL}/${id}`;

    console.log("edit url:", url)

    const method = "put";

    const tags = listing.tags.split(",")
    console.log(tags)

    const media = listing.media.split(",");
    console.log(media);

    try {

    if (!id) {
      throw new Error("You need to provide a Listing Id to edit the listing");
    }

    const token = load("token");

    if (!token) {
      throw new Error("You must be logged in to edit a listing");
    }

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: method,
      body: JSON.stringify({
        title:listing.title,
        description: listing.description,
        tags,
        media,

      }),
    });

    // const json = await response.json();
    // console.log("Edited results:",json)

    if (response.ok) {
      window.location.reload();
      alert("Your post is updated");
      return await response.json();
      
    }
    throw new Error("this listing can not be edited");
    
  } catch (error) {
    throw alert("Something went wrong to edit the listing");
  }
}
