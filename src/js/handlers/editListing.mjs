/**
 * This function selects html form , adds submit event listener to the form. collects updated new data and passes the data to the async
 * function editListing(listing) to send it to the APi end point in order to updated the listing.
 */

import { editListing } from "../api/listings/index.mjs"

export async function setEditListingListener() {
    const form = document.querySelector("#edit-listing");
    console.log("Edit Form:", form)
  
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        console.log("new Data:",formData )
        const listing = Object.fromEntries(formData.entries());
        console.log("new listing:",listing )
        try {
          editListing(listing)
        } catch (error) {
          console.log("error:", error);
        }
 
      });
    }
  }

 