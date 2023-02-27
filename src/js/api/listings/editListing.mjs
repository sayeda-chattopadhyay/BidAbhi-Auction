import { listingsBaseURL } from "../constants.mjs";
import { load } from "../../storage/index.mjs";

const querryString = document.location.search;
const params = new URLSearchParams(querryString);
const id = params.get("id");




/**
 * Every post has a unique id. Get this id from url and create Api endpoint where updated data for a specific post needs to be sent.
 * This Async function sends updated post to the API cendpoint.
 */

//const url = `${listingsBaseURL}/${id}`;


export async function editListing(listing) {
    const url = `${listingsBaseURL}/${id}`;
    console.log("edit url:", url)
    const method = "put";
  try {
    if (!id) {
      throw new Error("You need to provide a postId to update the post");
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
      body: JSON.stringify(listing),
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
