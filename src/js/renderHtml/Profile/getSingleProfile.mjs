
/**
 * Create Html for profile user
 * @param {Object} profile
 */



const profileDetailsContainer = document.getElementById(
  "profileDetailsContainer"
);

export function createSingleProfileHTML(profile) {
  console.log(profile);

  if (profile.length === 0) {
    return profileDetailsContainer.innerHTML === "No profile found";
  }

  profileDetailsContainer.innerHTML = "";

  profileDetailsContainer.innerHTML += `<div class="row align-items-center justify-content-center mx-auto py-5">
      <div class="col-12 col-md-8 col-lg-6">
        <img
          src="${profile.avatar}"
          class="d-block mx-lg-auto img-fluid rounded-circle profile-image"
          alt="${profile.name}"
         
          loading="lazy"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6 d-flex flex-column">
        <div class="my-4">
          <p class="h1">${profile.name}</p>
          <p class="lh-lg" id="userEmail">${profile.email}</p>
        </div>
        <div>
          <p class="fs-2">
            <strong class="text-importantText">Credit:</strong>${profile.credits}
          </p>
        </div>
        <div
          class="d-flex justify-content-between align-items-center border border-grey p-2" >
          <div class="d-f flex-column">
            <p class="fw-bold" id="userPosts">Listings</p>
            <p>${profile.listings.length}</p>
            
          </div>
          <div class="d-f flex-column">
            <p class="fw-bold" id="userFollowes">Wins</p>
            <p>${profile.wins.length}</p>
          </div>
          <div class="d-f flex-column">
            <p class="fw-bold" id="userFollowing">Bids</p>
            <p></p>
            
          </div>
        </div>
        <div class="my-4">
          <a
            href="/add-item.html"
            class="w-50 btn btn-lg btn-primary"
            type="submit"
          >
            Add Item
          </a>
        </div>
      </div>
    </div>`;
}
