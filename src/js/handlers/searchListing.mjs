import * as listings from "../templates/listings/index.mjs";

import {displayAllListings} from "../templates/listings/displayalllistings.mjs";



export function setSearchListingListener() {
  const form = document.querySelector("form#searchListing");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const tagLowerCase = formData.get("tag").toLowerCase();
      const tag = tagLowerCase.replace(/\s+/g, ",");
      console.log("tagWithComma:", tag);
      listings.displaySearchedListings(tag);
    });
  }
}
 // below function takes tag, sends it to api, fetch listings and display html

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


