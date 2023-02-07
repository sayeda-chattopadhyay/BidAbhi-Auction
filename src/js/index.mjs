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
      // ui.displaySingleProfile();
      // api.getProfileDetails();

      break;

    case "/index.html":
      // listings.getAllListings();
      ui.displayAllListings();
      handler.setLogoutBUttonListener();

      break;
  }
}

router();
