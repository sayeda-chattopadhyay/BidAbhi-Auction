// import {getProfileDetails} from "../api/profiles/getSingleProfile"

// const profileDetails = "getProfileDetails";

export function createSingleProfileHTML(profile) {
  const profileDetailsContainer = document.getElementById(
    "profileDetailsContainer"
  );

  //   if (listings.length === 0) {
  //     return listingsContainer.innerHTML === "No item found";
  //   }

  profileDetailsContainer.innerHTML = "";

  //   profile.forEach(function (profileData) {
  //     const { name, email, avatar, credits, wins, _count } = profileData;

  profileDetailsContainer.innerHTML += `  <div class="row align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          src="${profile.avatar}"
          class="d-block mx-lg-auto img-fluid rounded-circle"
          alt="${profile.name}"
          width="500"
          height="500"
          loading="lazy"
        />
      </div>
      <div class="col-12 col-md-6 d-flex flex-column">
        <div class="my-4">
          <p class="h1">${profile.name}</p>
          <p class="lh-lg" id="userEmail">${profile.email}</p>
        </div>
        <div>
          <p class="fs-2">
            <strong class="text-importantText">Credit:</strong> ${profile.credits}
          </p>
        </div>
        <div
          class="d-flex justify-content-between align-items-center border border-gray p-2"
        >
          <div class="d-flex-column">
            <p class="fw-bold" id="userPosts">Listings</p>
            <p></p>
          </div>
          <div class="d-f flex-column">
            <p class="fw-bold" id="userFollowes">Wins</p>
            <p></p>
          </div>
          <div class="d-f flex-column">
            <p class="fw-bold" id="userFollowing">Bids</p>
            <p></p>
          </div>
          <div class="d-f flex-column">
            <p class="fw-bold" id="userFollowing">Favourites</p>
            <p>1</p>
          </div>
        </div>
        <div class="my-4">
          <a
            href="/add-item.html"
            class="w-50 btn btn-lg btn-secondary"
            type="submit"
          >
            Add Item
          </a>
        </div>
      </div>
    </div>`;
  //   });
}

// function createHTML(details) {
//     const specificPostContainer = document.getElementById("specificPost");

//     specificPostContainer.innerHTML += ` <div class="card" style="width: 18rem;">
//                                               <div class="">
//                                                   <img src="${details.media}" class="card-img-top img-thumbnail style="width: 18rem;height : 18rem;" alt="${details.title}"/>
//                                               </div>
//                                               <div class="card-body">
//                                                   <h2 class="card-title">${details.title}</h2>
//                                                   <p class="card-text">${details.body}</p>
//                                                   <p class="card-text">By ${details.created}</p>
//                                               </div>
//                                           </div>`;
//   }
