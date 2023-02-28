import * as api from "../api/listings/index.mjs";

/**
 * Selects all delete button through data-set id attribute.
 * Use forEach method to loop throgh and adds eventlistener to all delete button to delete the listing.
 * On click event on the button , removeListing(event) function will run and receives the id from event.target.dataset;
 * passes the id to the async removeListing(deleteId) to delete specified post.
 */

export function setDeleteButtonListener() {
  const deleteButton = document.querySelectorAll("[data-delete-id]");
  console.log("deleteButton",deleteButton );

  deleteButton.forEach(function (button) {
    button.addEventListener("click", deleteListing);
  });
}

export async function deleteListing(event) {
  if (confirm("Are you sure you want to delete the post?")) {
    const { deleteId } = event.target.dataset;

    await api.removeListing(deleteId);
    window.location.reload();
  }
}
