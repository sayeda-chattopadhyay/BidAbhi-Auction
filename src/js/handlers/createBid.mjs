import { createBidOnlisting } from "../api/listings/index.mjs";
import {load} from "../storage/index.mjs"
//import {createSingleListingHTML} from "../templates/index.mjs"

//import { isUserLoggedIn } from "../api/auth/isUserLoggedIn.mjs";

export async function setCreateBidListener() {
  const form = document.querySelector("form#bid-form");
  const bidButton = document.querySelector("#bid-button");
  const bidMessage = document.querySelector("#bid-message");
  const noCreditMessage = document.querySelector("#noCredit-message")
  const bidHistorySection = document.getElementById("bid-history-section");

  const bidSection = document.querySelector("#place-your-bid-section")
  console.log("bidSection :", bidSection)
  
  noCreditMessage.style.display ="none";

  const token = load("token")

  // const profile =load("profile")
  // console.log("profile:", profile)
  // const profileName = profile.name
  // console.log("profileName:", profileName)

  if (!token){
    bidButton.disabled = true;
    bidMessage.style.display="block";
    bidHistorySection.style.display="none";
  }
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