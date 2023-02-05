import * as handler from "./handlers/index.mjs";

function router() {
  const path = location.pathname;
  console.log(path);

  switch (path) {
    case "/signUp.html":
      handler.setRegisterFormListener();
      break;

    case "/login.html":
      handler.setLoginFormListener();
      break;

    case "/profile.html":
      handler.setLogoutBUttonListener();
      break;
  }
}

router();
