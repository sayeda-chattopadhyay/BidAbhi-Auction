import { profileURL } from "../constants.mjs";
import { load } from "../../storage/index.mjs";
import { createSingleProfileHTML } from "../../templates/index.mjs";

const token = load("token");
console.log(token);

const profile = load("profile");
console.log(profile);

const profileName = profile.name;
console.log(profileName);

const getProfileUrl = `${profileURL}${profileName}`;
console.log(getProfileUrl);

const qs = "/bids?_listings=true";

// const bidListinsUrl = `${getProfileUrl}${qs}`;
// console.log(bidListinsUrl);

export async function getProfileDetails() {
  try {
    // const getProfileUrl = `${profileURL}${profileName}`;
    // console.log(getProfileUrl);

    const bidListinsUrl = `${getProfileUrl}${qs}`;
    console.log(bidListinsUrl);

    const response = await fetch(bidListinsUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    //   if (response.ok) {
    //     return await response.json();
    //   }

    const json = await response.json();
    console.log(json);

    createSingleProfileHTML(profile);
  } catch (error) {
    console.log(error);
  }
}

getProfileDetails();

// const profileDetailsContainer = document.getElementById(
//   "profileDetailsContainer"
// );

// function createSingleProfileHTML(user) {
//   if (profile.length === 0) {
//     return profileDetailsContainer.innerHTML === "No item found";
//   }

//   profileDetailsContainer.innerHTML = "";

//   profileDetailsContainer.innerHTML += ` <div class="row align-items-center g-5 py-5">
//                                             <div class="col-10 col-sm-8 col-lg-6 border border-primary">
//                                                 <img
//                                                 src="${user.avatar}"
//                                                 class="d-block mx-lg-auto img-fluid rounded-circle"
//                                                 alt="${user.name}"
//                                                 width="500"
//                                                 height="500"
//                                                 loading="lazy"
//                                                 />
//                                             </div>
//                                             <div class="col-12 col-md-6 d-flex flex-column border border-primary">
//                                                 <div class="my-4">
//                                                 <p class="h1">${user.name}</p>
//                                                 <p class="lh-lg" id="userEmail">${user.email}</p>
//                                                 </div>
//                                                 <div>
//                                                 <p class="fs-2">
//                                                     <strong class="text-importantText">Credit:</strong> ${user.credits}
//                                                 </p>
//                                                 </div>
//                                                 <div
//                                                 class="d-flex justify-content-between align-items-center border border-gray p-2"
//                                                 >
//                                                 <div class="d-flex-column">
//                                                     <p class="fw-bold" id="userPosts">Listings</p>
//                                                     <p></p>
//                                                 </div>
//                                                 <div class="d-f flex-column">
//                                                     <p class="fw-bold" id="userFollowes">Wins</p>
//                                                     <p>${user.wins}</p>
//                                                 </div>
//                                                 <div class="d-f flex-column">
//                                                     <p class="fw-bold" id="userFollowing">Bids</p>
//                                                     <p></p>
//                                                 </div>
//                                                 </div>
//                                                 <div class="my-4">
//                                                     <a
//                                                         href="/add-item.html"
//                                                         class="w-50 btn btn-lg btn-secondary"
//                                                         type="submit">
//                                                         Add Item
//                                                     </a>
//                                                 </div>
//                                                 <div class="my-4">
//                                                     <a
//                                                         href="/add-item.html"
//                                                         class="w-50 btn btn-lg btn-secondary"
//                                                         type="submit">
//                                                        Change Avatar
//                                                     </a>
//                                                 </div>

//                                             </div>
//     </div>`;
// }
