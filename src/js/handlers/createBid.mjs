import { createBidOnlisting } from "../api/listings/index.mjs";
import {load} from "../storage/index.mjs"

// const profile = load("profile")
// console.log("profile:", profile)
// const profileName = profile.name
// console.log("profileName:", profileName)
//import {createSingleListingHTML} from "../templates/index.mjs"

//import { isUserLoggedIn } from "../api/auth/isUserLoggedIn.mjs";

// import {getAllListings} from "../api/listings/index.mjs"

// const results = await getAllListings();

// export function renderSellerName(){

// console.log(" Results of getListing function: ",results )

// for (let i = 0; i< results.length; i++ ){
//   const sellers = results[i].seller;
//   console.log("sellers :", sellers)
//   const sellerName = sellers.name
//   console.log("sellerName :", sellerName)

//   return sellerName;

// }
 
// }

// const SinglesellerName = renderSellerName()
// console.log(SinglesellerName )


//import {getSingleListing} from "../api/listings/index.mjs"






export async function setCreateBidListener() {
  const form = document.querySelector("form#bid-form");
   const bidButton = document.querySelector("#bid-button");
  const bidMessage = document.querySelector("#bid-message");
  //const bidSectionContainer = document.querySelector("#bid-section");
  const noCreditMessage = document.querySelector("#noCredit-message")
  //const bidHistorySection = document.getElementById("bid-history-section");

  const bidSection = document.querySelector("#place-your-bid-section")
  console.log("bidSection :", bidSection)
  
  noCreditMessage.style.display ="none";

  const token = load("token")
  // const profile = load("profile")
  // console.log("localStorageProfile:",profile )
  // const profileName = profile.name;
  // console.log("localStorageProfileName:",profileName )

  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);
  // const listingId = urlParams.get("id");
  // console.log("listingId:",listingId )
 
  
  // const sellerObj = await getSingleListing(listingId)
  // const sellerName = sellerObj.seller.name;

  // console.log(" seller Object:", sellerObj)
  // console.log("seller Name:", sellerName)
 

  if (!token){
     bidButton.disabled = true;
    bidMessage.style.display="block";
    // bidHistorySection.style.display="none";
    // bidSection.style.display= "none"
  }
  // if(profileName === sellerName){
  //   bidSection.style.display= "none"

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




// else if(profileName === sellerName){
//   bidSection.style.display ="none"
//   editBtn.style.display ="block"
//   deletBtn.style.display ="block"
// }