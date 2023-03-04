import { createBidOnlisting } from "../api/listings/index.mjs";
import {load} from "../storage/index.mjs"


export async function setCreateBidListener() {
    const form = document.querySelector("form#bid-form");
   console.log("Bid form", form)

  const bidButton = document.querySelector("#bid-button");
  console.log("bidButton:", bidButton)

  const bidMessage = document.querySelector("#bid-message");
  //const bidSectionContainer = document.querySelector("#bid-section");
  const noCreditMessage = document.querySelector("#noCredit-message")
  const bidHistorySection = document.getElementById("bid-history-section");

  const placeYourBidSection = document.querySelector("#place-your-bid-section")
  console.log("bidSection :", placeYourBidSection)
  
  noCreditMessage.style.display ="none";
  bidMessage.style.display="none";
  // 

  const token = load("token")
  console.log("token:", token)

if(!token){
  bidButton.disabled = true;
  bidMessage.style.display="block";
  bidHistorySection.style.display ="none"
  console.log(" There is no token")
  bidMessage.style.display="block";
}else{
 
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





