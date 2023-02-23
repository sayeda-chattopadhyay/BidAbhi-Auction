/**
 * This is a reusable function which shows error message when error occures. It is good for usablity purpose.
 * @param {number} containerId this is the id of the html conatiner.
 * @param {string} error this is the error which is catched by try and catch method
 */

export function displayError(containerId, error) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("error");
  const errorMessage = document.createTextNode(error);
  div.appendChild(errorMessage);
  container.appendChild(div);
}
