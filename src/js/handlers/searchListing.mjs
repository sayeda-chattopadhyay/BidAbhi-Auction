import * as listings from "../templates/listings/index.mjs";

import {displayAllListings} from "../templates/listings/displayAllListings.mjs";



export function setSearchListingListener() {
  const form = document.querySelector("form#searchListing");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const tag = formData.get("tag");
      console.log("tag:", tag);

      // below function takes tag, sends it to api, fetch listings and display html

      listings.displaySearchedListings(tag);
    });
  }
}


// clear Search

export function setClearSearch(){
  const clearSearchButton = document.querySelector("#clear-search")
  console.log(clearSearchButton)

  const searchInput = document.querySelector("#searchInput")
 
  console.log(searchInput)

  if(clearSearchButton){
    clearSearchButton.addEventListener("click",()=>{
      console.log("input value:", searchInput.value)
      searchInput.value="";
      displayAllListings();

    })
  }

}


