import * as handler from "./handlers/index.mjs";

import * as templates from "./templates/listings/index.mjs";

//import * as listings from "./api/listings/getSingleListing.mjs";

// import{userLoggedIn} from"./handlers/header.mjs"

// import * as ui from "./ui/index.mjs";

// import * as api from "./api/profiles/index.mjs";



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
      handler.userLoggedIn();
      // api.getAllBidsByProfile();
      // api.getAllListingsByProfile();
      // api.getProfileDetails();
      break;
    // ui.displaySingleProfile();
    case "/":
    case "/index.html":
      templates.displayAllListings();
      handler.setLogoutBUttonListener();
      handler.setCreateListingListener();
      handler.userLoggedIn();
      handler.setSearchListingListener();
      handler.setClearSearch();

      break;
    // listings.getAllListings();

    case "/singleListing.html":
      handler.setLogoutBUttonListener();
      handler.setCreateBidListener();
      handler.userLoggedIn();
      // listings.getSingleListing();
      break;

    case "/add-item.html":
      // ui.displayAllListings();
      handler.setCreateListingListener();
      handler.userLoggedIn();
      handler.setLogoutBUttonListener();
      break;

      case "/edit-item.html":
        handler.userLoggedIn();
        handler.setEditListingListener();
        break;
  }
}

router();

//setUpdateListingListener()