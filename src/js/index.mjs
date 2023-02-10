import * as handler from "./handlers/index.mjs";

import * as ui from "./ui/index.mjs";

// import * as api from "./api/profiles/index.mjs";

// import * as listings from "./api/listings/index.mjs";

function router() {
  const path = location.pathname;
  console.log(path);

  switch (path) {
    case "/login.html":
      handler.setLoginFormListener();
      break;

    case "/signUp.html":
      handler.setRegisterFormListener();
      break;

    case "/profile.html":
      handler.setLogoutBUttonListener();
      break;
    // ui.displaySingleProfile();
    // api.getProfileDetails();

    case "/index.html":
      ui.displayAllListings();
      handler.setLogoutBUttonListener();
      handler.setCreateListingListener();
      break;
    // listings.getAllListings();

    case "/singleListing.html":
      handler.setLogoutBUttonListener();
      break;

    case "/add-item.html":
      // ui.displayAllListings();
      handler.setCreateListingListener();
      break;
  }
}

router();
