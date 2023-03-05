/**
 * Create Html for All Active Listing
 * @param {Object} listings
 */




const activeListingsContainer = document.querySelector("#active-listings-container");


export function createActiveListingsHtml(listings) {
    activeListingsContainer.innerHTML ="";
 
   listings.forEach(function (listing) {
    const { id, title, description, media, created, endsAt, _count, tags} =
    listing; // destructuring

  let imgMedia = media;

  if (media.length === 0) {
    imgMedia = ["/images/no-image-2.jpg"];
  }

//  let sellerName = seller.name;

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

  const formattedEndTime = new Date(created).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
    
    activeListingsContainer.innerHTML += `<div class="col-12 col-lg-4 col-md-6 col-sm-12 mt-4">
                                    <div class="card border-0 p-2 shadow-sm">
                                        <a href="/singleListing.html?id=${id} class ="c-img-holder"
                                            ><img
                                            src="${imgMedia}"
                                            class="card-img-top c-image"
                                            alt="${title}"
                                        /></a>
                                        <div class="card-body bg-light">
                                            <h3 class="card-title pb-0">${title}</h3>
                                            <p class="card-text c-description">
                                            <strong>Description: </strong>${description}
                                            </p>
                                            <p class="card-text">
                                            <strong>Tags: </strong>${tags}
                                            </p>
                                            <p class="card-text"><strong>Seller:</strong></p>
                                        </div>
                                        <div class="card-footer bg-light border-0 pt-0 mt-0">
                                            <hr />
                                            <p class="mb-0"><strong>Bids: </strong>${_count.bids}</p>
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
                                             <a href="/singlelisting.html?id=${id}"class="btn btn-primary c-link">
                                                        <strong>View Item</strong>
                                                    </a>
                                        </div>
                                    </div>
                                </div>`;
    });
  
    
  }