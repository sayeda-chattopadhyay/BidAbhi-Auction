import { createBidOnlisting } from "../api/listings/index.mjs";

//import { isUserLoggedIn } from "../api/auth/isUserLoggedIn.mjs";

export async function setCreateBidListener() {
  const form = document.querySelector("form#bid-form");
  const button = document.querySelector("#bid-button");
  console.log(button);

  if (form) {
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

setCreateBidListener();

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

// new
// export async function setCreateBidListener() {
//   const form = document.querySelector("form#bid-form");
//   const button = document.querySelector("#bid-button");
//   console.log(button);

//   if (!isUserLoggedIn) {
//     button.disabled = true;
//   } else {
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

// setCreateBidListener();
