/**
 * Create Html for All Listings the users bid on
 * @param {Object} bids
 */


const allBidsByProfileContainer = document.getElementById(
    "allBidsByProfileContainer"
  );
  
  export function createAllBidsByProfileHTML(bids) {
    allBidsByProfileContainer.innerHTML = "";
  
    bids.forEach(function (bid) {
      const { amount, listing, created } = bid;
      const endsAt = listing.endsAt;
  
      const formattedCreatedDate = new Date(created).toLocaleDateString("en-us", {
        month: "short",
        day: "numeric",
      });
  
      const formattedCreatedTime = new Date(created).toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
      const formattedEndDate = new Date(endsAt).toLocaleDateString("en-us", {
        month: "short",
        day: "numeric",
      });
  
      const formattedEndTime = new Date(endsAt).toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
  
      allBidsByProfileContainer.innerHTML += `<div class="col-12 col-lg-4 col-md-6 col-sm-12 mt-4">
                                                        <div class="card h-100 border-0 p-2">
                                                            <a href=""
                                                                ><img
                                                                src="${listing.media}"
                                                                class="card-img-top"
                                                                style="height: 22rem; object-fit: cover"
                                                                alt=""
                                                            /></a>
                                                            <div class="card-body bg-light">
                                                                <h3 class="card-title pb-0">${listing.title}</h3>
                                                                <p class="card-text">
                                                                <strong>Description: </strong>${listing.description} </p>
                                                                <p class="card-text">
                                                                <strong>Tags: </strong>${listing.tags}</p>
                                                            </div>
                                                            <div class="card-footer bg-light border-0 pt-0 mt-0">
                                                                <hr />
                                                                <p class="mb-0"><strong>Bids Amount: </strong>${amount}</p>
                                                                <p class="mb-0">
                                                                <strong>Created: </strong>${formattedCreatedDate}<span class="small text-muted"
                                                                    >, ${formattedCreatedTime}</span
                                                                >
                                                                </p>
                                                                <p class="mb-3">
                                                                <strong>Ends at: </strong>${formattedEndDate}<span class="small text-muted"
                                                                    >, ${formattedEndTime}</span
                                                                >
                                                                </p>
                                                                <a href="/singlelisting.html?id=${listing.id}"class="btn btn-primary" style="width: 50%">
                                                                            <strong>View Item</strong>
                                                                        </a>
                                                            </div>
                                                        </div>
                                                      </div>`;
    });
  }
  