import { createBidOnlisting } from "../api/listings/index.mjs";
import {load} from "../storage/index.mjs"

//import { isUserLoggedIn } from "../api/auth/isUserLoggedIn.mjs";

export async function setCreateBidListener() {
  const form = document.querySelector("form#bid-form");
  const button = document.querySelector("#bid-button");
  const bidMessage = document.querySelector("#bid-message");
  const noCreditMessage = document.querySelector("#noCredit-message")
  const bidHistory = document.getElementById("bidHistory");
  noCreditMessage.style.display ="none";
  const token = load("token")
  

  if (!token){
    button.disabled = true;
    bidMessage.style.display="block";
    bidHistory.style.display="";
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

// setCreateBidListener();

// please log in to place you bid

//  if (!loggedIn) && (form) {
//   button.disabled = true;
//  }else{
//
//   form.addEventListener("submit", async (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
//     const amount = formData.get("amount");
//     const bidAmount = Number(amount);

//     console.log(bidAmount);

//     try {
//       createBidOnlisting(bidAmount);
//     } catch (error) {
//       console.log(error);
//     }
//   });
//

// }




// actual function


// export async function setCreateBidListener() {
//   const form = document.querySelector("form#bid-form");
//   const button = document.querySelector("#bid-button");
//   const token = load("token")
//   console.log(token)
//   button.disabled = true;
//   console.log(button);

//   if (form) {
//     form.addEventListener("submit", async (event) => {
//       event.preventDefault();
//       const form = event.target;
//       const formData = new FormData(form);
//       const amount = formData.get("amount");
//       const bidAmount = Number(amount);

//       try {
//         createBidOnlisting(bidAmount);
//       } catch (error) {
//         console.log(error);
//       }
//     });
//   }
// }
