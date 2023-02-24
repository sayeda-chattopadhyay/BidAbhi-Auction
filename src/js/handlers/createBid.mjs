import { createBidOnlisting } from "../api/listings/index.mjs";
import {load} from "../storage/index.mjs"

//import { isUserLoggedIn } from "../api/auth/isUserLoggedIn.mjs";

export async function setCreateBidListener() {
  const form = document.querySelector("form#bid-form");
  const button = document.querySelector("#bid-button");
  const bidMessage = document.querySelector("#bid-message");
  const noCreditMessage = document.querySelector("#noCredit-message")
  const bidHistorySection = document.getElementById("bid-history-section");
  noCreditMessage.style.display ="none";
  const token = load("token")
  

  if (!token){
    button.disabled = true;
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

