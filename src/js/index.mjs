import * as handler from "./handlers/index.mjs";

import * as templates from "./templates/listings/index.mjs";


function router() {
  const path = location.pathname;
  console.log(path);

  switch (path) {
    case "/login.html":
      handler.setLoginFormListener();
      break;

    case "/signup.html":
      // handler.setRegisterFormListener();
      break;

    case "/profile.html":
      handler.setLogoutBUttonListener();
      handler.userLoggedIn();
      // api.getAllBidsByProfile();
      // api.getAllListingsByProfile();
      // api.getProfileDetails();
      break;
    case "/":
    case "/index.html":
      templates.displayAllListings();
      handler.setLogoutBUttonListener();
      handler.setCreateListingListener();
      handler.userLoggedIn();
      handler.setSearchListingListener();
      handler.setClearSearch();
      
      break;
   

    case "/singlelisting.html":
      handler.setLogoutBUttonListener();
      handler.setCreateBidListener();
      handler.userLoggedIn();
      // handler.setDeleteButtonListener();
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
        handler.setLogoutBUttonListener();
        // handler.setEditListingListener();
        break;

       case "/listing.html":
        handler.userLoggedIn();
        handler.setLogoutBUttonListener();
        templates.displayActiveListings();
        break;

        case "/fashion.html":
        handler.userLoggedIn();
        handler.setLogoutBUttonListener();
        templates.displayFashionListings();

  }
}

router();

