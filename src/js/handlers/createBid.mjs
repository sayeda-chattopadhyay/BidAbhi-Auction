import { createBidOnlisting } from "../api/listings/index.mjs";
import {load} from "../storage/index.mjs"


 //import {createSingleListingHTML} from "../renderHtml/Listing/singleListing.mjs"



export async function setCreateBidListener() {
  const form = document.querySelector("form#bid-form");
  const bidButton = document.querySelector("#bid-button");

  console.log("bidButton:", bidButton)
  const bidMessage = document.querySelector("#bid-message");
  //const bidSectionContainer = document.querySelector("#bid-section");
  const noCreditMessage = document.querySelector("#noCredit-message")
  //const bidHistorySection = document.getElementById("bid-history-section");

  const placeYourBidSection = document.querySelector("#place-your-bid-section")
  console.log("bidSection :", placeYourBidSection)
  
  noCreditMessage.style.display ="none";

  const token = load("token")
  console.log("token:", token)
  const profile = load("profile")
  console.log("localStorageProfile:",profile )
  const profileName = profile.name;
  console.log("localStorageProfileName:",profileName )

  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);
  // const listingId = urlParams.get("id");
  // console.log("listingId:",listingId );
 
  
 

  if (!token){
    bidButton.style.display = true;
    bidMessage.style.display="block";
    
    // bidHistorySection.style.display="none";
    // bidSection.style.display= "none"
  }
  // if(profileName === sellerName){
  //   placeYourBidSection.style.display= "none"

  // }
  else {
    bidMessage.style.display="none";
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const amount = formData.get("amount");
      const bidAmount = Number(amount);

      try {
        createBidOnlisting(bidAmount);
      } catch (error) {
        console.log(error);
      }
    });
  }
}




