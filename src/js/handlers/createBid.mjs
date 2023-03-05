import { createBidOnlisting } from "../api/listings/index.mjs";
import {load} from "../storage/index.mjs"


/**
 * Place bid on listing
 * it takes bid amount and sends to api if there is token
 */


export async function setCreateBidListener() {
  const form = document.querySelector("form#bid-form");
  const bidButton = document.querySelector("#bid-button");

  const bidMessage = document.querySelector("#bid-message");
  
  const noCreditMessage = document.querySelector("#noCredit-message")
  const bidHistorySection = document.getElementById("bid-history-section");

  const placeYourBidSection = document.querySelector("#place-your-bid-section")
 
  noCreditMessage.style.display ="none";
  bidMessage.style.display="none";


  const token = load("token")


if(!token){
  bidButton.disabled = true;
  bidMessage.style.display="block";
  bidHistorySection.style.display ="none";
  placeYourBidSection.style.display ="none";
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





