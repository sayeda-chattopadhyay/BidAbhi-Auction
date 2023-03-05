/**
 * This is a reusable function which shows loading while rendering listings to the page. It is good for usablity purpose.
 * @param {number} containerId this is the id of the html conatiner.
 */



export function displayLoading(conatinerId) {
  const container = document.getElementById(conatinerId);
  container.innerHTML = "";
  const spinnerWrapper =document.createElement("div");
  spinnerWrapper.classList.add("text-center")

  const div = document.createElement("div");
  div.classList.add("spinner-border");
  const span =  document.createElement("span"); 
  span.classList.add("visually-hidden");
   
  div.appendChild(span);
  spinnerWrapper.appendChild(div)
  container.appendChild(spinnerWrapper);
}
