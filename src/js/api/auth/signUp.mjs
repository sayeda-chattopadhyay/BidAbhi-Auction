import { registerURL } from "../constants.mjs";
// import { displayError } from "../../ui/displayErrorMessage.mjs";

// const confirmMessage = document.getElementById("confirm-message")
// console.log(confirmMessage)

/**
 * Send users` registered data to api.On succesful register it will go to login page to log in. 
 * @param {Object} profile object containing users name, email , password and avatar.
 * @param {string} profile.name name of user
 * @param {string} profile.email users email
 * @param {string} profile.password users password
  * @param {string} profile.avatar users password
 */


const method = "post";

export async function register(profile) {
  try {
    const url = registerURL;

    const userToRegister = {
      headers: {
        "content-Type": "application/json",
      },
      method,
      body: JSON.stringify(profile),
    };

    const response = await fetch(url, userToRegister);
   

    // if (!response.ok) {
    //   const message = `An error has occurred: ${response.status}`;
    //   console.log(message);
    //   throw new Error(message);
    // }

    const result = await response.json();

  // if(result){

  //   confirm("You are now registered.Please Log In");

  //   confirmMessage.innerHTML += `<div class="text-center">Your are successsfully registered your account. Please Log In</div>`
     
  //   }else{
  //     return Error;
  //   }

 

    window.location.replace("/login.html");
    return result;

  
  } catch (error) {
    console.log(error);
    // displayError("errorMessage", error);
  }
}

