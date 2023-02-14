// import { searchListing } from "../api/listings/searchListing.mjs";
import * as ui from "../ui/index.mjs";

export function setSearchListingListener() {
  const form = document.querySelector("form#searchListing");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const tag = formData.get("tag");
      console.log("tag:", tag);
      ui.displaySearchedListings(tag);
    });
  }
}

//trying again

// const form = document.querySelector("form#searchListing");

// import { createAllListingsHTML } from "../templates/allListings.mjs";

// const searchInput = document.querySelector("input#searchInput");
// console.log(searchInput);

// export function SearchListingListener(listings) {
//   searchInput.addEventListener("input", (event) => {
//     // event.preventDefault();
//     let value = event.target.value.toLowerCase();
//     console.log(value);

//     let searchedArray = [];

//     for (let i = 0; i < listings.length; i++) {
//       let currentListing = listings[i];

//       if (
//         currentListing.title.toLowerCase().includes(value) ||
//         currentListing.description.toLowerCase().includes(value)
//       ) {
//         searchedArray.push(currentListing);
//       }
//     }
//     createAllListingsHTML(searchedArray);
//   });
// }
